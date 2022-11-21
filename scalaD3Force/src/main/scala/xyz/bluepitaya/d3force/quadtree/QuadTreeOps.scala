package xyz.bluepitaya.d3force.quadtree

import xyz.bluepitaya.common.Vec2f
import xyz.bluepitaya.d3force.Force

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
    def log2(x: Double) = Math.log(x) / Math.log(2.0)

    val minX = points.map(_.x).minOption.getOrElse(0.0)
    val minY = points.map(_.y).minOption.getOrElse(0.0)
    val maxX = points.map(_.x).maxOption.getOrElse(1.0)
    val maxY = points.map(_.y).maxOption.getOrElse(1.0)

    val from = Vec2f(minX, minY)
    val to = Vec2f(maxX, maxY)
    val _w = Math.abs(to.x - from.x)
    val _h = Math.abs(to.y - from.y)
    val w_exponent = if (_w > 1) Math.ceil(log2(_w)) else 0
    val h_exponent = if (_h > 1) Math.ceil(log2(_h)) else 0
    val w = Math.pow(2, w_exponent)
    val h = Math.pow(2, h_exponent)
    val a = Math.max(w, h) // always add square region
    Region(from.floor, (from + Vec2f(a, a)).floor)
  }

  def addAll[A, B](dataPoints: Seq[(Vec2f, A)]): QuadTree[A, B] = {
    val size = getSize(dataPoints.map(_._1))
    val tree = QuadTree[A, B](size, None)
    dataPoints.foldLeft(tree) { (t, p) => add(p._1, p._2, t) }
  }

  private val quadrantOrder: List[Quadrant] =
    List(TopLeft, TopRight, BottomLeft, BottomRight)

  def preorderReduceData[A, B](
      tree: QuadTree[A, B],
      mapping: (Vertex[A, B], Region) => Force,
      stopCondition: (TreeNode[A, B], Region) => Boolean,
      initialData: Force
  ): Force = {
    def traverse(
        root: Option[Vertex[A, B]],
        region: Region,
        data: Force
    ): Force = root match {
      case None => data
      case Some(v) => v match {
          case node: TreeNode[A, B] =>
            val nextData = data + mapping(node, region)
            if (stopCondition(node, region))
              //
              nextData
            else quadrantOrder.foldLeft(nextData) { (n, q) =>
              val xd =
                traverse(node.children.get(q), region.applyQuadrant(q), n)
              xd
            }
          case leaf: Leaf[A, B] =>
            val next = mapping(leaf, region)
            data + next
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
    ): Option[Vertex[A, C]] = root.map {
      case TreeNode(children, metadata) =>
        val nextChildren = quadrantOrder
          .flatMap { quadrant =>
            traverse(children.get(quadrant), region.applyQuadrant(quadrant))
              .map(x => quadrant -> x)
          }
          .toMap
        val nextMetadata = nodeMapping(metadata, nextChildren)
        TreeNode[A, C](nextChildren, nextMetadata)
      case leaf: Leaf[A, B] =>
        val nextMetadata = leafMapping(leaf)
        leaf.copy(metadata = nextMetadata)
    }

    QuadTree(tree.region, traverse(tree.root, tree.region))
  }
}
