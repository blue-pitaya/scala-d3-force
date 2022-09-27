package xyz.bluepitaya.d3force.quadtree

import xyz.bluepitaya.d3force.Vec2f

case class Region(p1: Vec2f, p2: Vec2f) {
  lazy val middle = p1 + ((p2 - p1) / 2)

  def quadrantOf(p: Vec2f): Quadrant = {
    val isRight = p.x >= middle.x
    val isBottom = p.y >= middle.y

    (isRight, isBottom) match {
      case (false, false) => TopLeft
      case (true, false)  => TopRight
      case (false, true)  => BottomLeft
      case (true, true)   => BottomRight
    }
  }

  def applyQuadrant(q: Quadrant): Region = q match {
    case TopLeft     => Region(p1, middle)
    case TopRight    => Region(Vec2f(middle.x, p1.y), Vec2f(p2.x, middle.y))
    case BottomLeft  => Region(Vec2f(p1.x, middle.y), Vec2f(middle.x, p2.y))
    case BottomRight => Region(middle, p2)
  }
}

object Region {
  def square(x1: Double, x2: Double, a: Double): Region = {
    val from = Vec2f(x1, x2)
    Region(from, from + Vec2f(a, a))
  }
}

sealed trait Quadrant
case object TopLeft extends Quadrant
case object TopRight extends Quadrant
case object BottomLeft extends Quadrant
case object BottomRight extends Quadrant

sealed trait Vertex[A, B] {
  val metadata: Option[B]
}
case class TreeNode[A, B](
    children: Map[Quadrant, Vertex[A, B]],
    metadata: Option[B] = None
) extends Vertex[A, B]
case class Leaf[A, B](point: Vec2f, data: List[A], metadata: Option[B] = None)
    extends Vertex[A, B]

case class QuadTree[A, B](region: Region, root: Option[Vertex[A, B]]) {}

case class Quad[A, B](v: Vertex[A, B], region: Region)

object QuadTreeOps {
  def add[A, B](point: Vec2f, data: A, tree: QuadTree[A, B]): QuadTree[A, B] = {
    val v = add(point, List(data), tree.root, tree.region)
    tree.copy(root = Some(v))
  }

  def add[A, B](
      point: Vec2f,
      data: List[A],
      root: Option[Vertex[A, B]],
      region: Region
  ): Vertex[A, B] = root match {
    // vertex is free, setup leaf
    case None => Leaf(point, data, None)
    case Some(value) => value match {
        // vertex is node, check next matching quadrant
        case TreeNode(children, metadata) =>
          val quadrant = region.quadrantOf(point)
          val v = add(
            point,
            data,
            children.get(quadrant),
            region.applyQuadrant(quadrant)
          )
          TreeNode(children.updated(quadrant, v), metadata)
        case Leaf(p, d, metadata) =>
          // add data to leaf if position is the same
          if (p == point) { Leaf(p, d ++ data, metadata) }
          // vertex is leaf, transform it to node and raapply old point and current point
          else {
            val nodeWithOldLeaf =
              add(p, d, Some(TreeNode[A, B](Map(), None)), region)
            add(point, data, Some(nodeWithOldLeaf), region)
          }
      }
  }

  private def getSize(points: Seq[Vec2f]): Region = {
    val from = Vec2f(points.map(_.x).min, points.map(_.y).min)
    val to = Vec2f(points.map(_.x).max, points.map(_.y).max)
    Region(from, to)
  }

  def addAll[A, B](dataPoints: Seq[(Vec2f, A)]): QuadTree[A, B] = {
    val size = getSize(dataPoints.map(_._1))
    val tree = QuadTree[A, B](size, None)
    dataPoints.foldLeft(tree) { (t, p) => add(p._1, p._2, t) }
  }

  private val quadrantOrder: List[Quadrant] =
    List(TopLeft, TopRight, BottomLeft, BottomRight)

  private sealed trait TraversalOrder
  private case object PreOrder extends TraversalOrder
  private case object PostOrder extends TraversalOrder

  private def _visit[A, B](
      tree: QuadTree[A, B],
      order: TraversalOrder
  ): List[Quad[A, B]] = {
    def traverse(v: Option[Vertex[A, B]], region: Region): List[Quad[A, B]] =
      v match {
        case None => List()
        case Some(value) => value match {
            case node: TreeNode[A, B] =>
              val rest = quadrantOrder.flatMap(quadrant =>
                traverse(
                  node.children.get(quadrant),
                  region.applyQuadrant(quadrant)
                )
              )
              val quad = Quad(node, region)
              order match {
                case PreOrder  => List(quad) ++ rest
                case PostOrder => rest ++ List(quad)
              }
            case leaf: Leaf[A, B] => List(Quad(leaf, region))
          }
      }

    traverse(tree.root, tree.region)
  }

  def preorderReduceData[A, B, C](
      tree: QuadTree[A, B],
      mapping: (Vertex[A, B], Region) => C,
      stopCondition: (TreeNode[A, B], Region) => Boolean,
      initialData: C
  ): C = {
    def traverse(root: Option[Vertex[A, B]], region: Region, data: C): C =
      root match {
        case None => data
        case Some(v) => v match {
            case node: TreeNode[A, B] =>
              val nextData = mapping(node, region)
              if (stopCondition(node, region)) nextData
              else quadrantOrder.foldLeft(nextData) { (n, q) =>
                traverse(node.children.get(q), region.applyQuadrant(q), n)
              }
            case leaf: Leaf[A, B] => mapping(leaf, region)
          }
      }

    traverse(tree.root, tree.region, initialData)
  }

  // map every node metadata with access to already mapped children metadata
  def postorderMapMetadata[A, B, C](
      tree: QuadTree[A, B],
      leafMapping: Leaf[A, B] => Option[C],
      nodeMapping: (Option[B], Map[Quadrant, Vertex[A, C]]) => Option[C]
  ): QuadTree[A, C] = {
    def traverse(
        root: Option[Vertex[A, B]],
        region: Region
    ): Option[Vertex[A, C]] = root match {
      case None => None
      case Some(v) => v match {
          case TreeNode(children, metadata) =>
            val nextChildren = quadrantOrder
              .flatMap { quadrant =>
                traverse(children.get(quadrant), region.applyQuadrant(quadrant))
                  .map(x => quadrant -> x)
              }
              .toMap
            val nextMetadata = nodeMapping(metadata, nextChildren)
            Some(TreeNode[A, C](nextChildren, nextMetadata))
          case Leaf(point, data, metadata) => Some(Leaf(
              point,
              data,
              nodeMapping(metadata, Map[Quadrant, Vertex[A, C]]())
            ))
        }
    }

    QuadTree(tree.region, traverse(tree.root, tree.region))
  }

  def visit[A, B](tree: QuadTree[A, B]): List[Quad[A, B]] =
    _visit(tree, PreOrder)

  def visitAfter[A, B](tree: QuadTree[A, B]): List[Quad[A, B]] =
    _visit(tree, PostOrder)
}
