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

sealed trait Quadrant
case object TopLeft extends Quadrant
case object TopRight extends Quadrant
case object BottomLeft extends Quadrant
case object BottomRight extends Quadrant

sealed trait Vertex
case class Node(children: Map[Quadrant, Vertex]) extends Vertex
case class Leaf(point: Vec2f, data: List[String]) extends Vertex

case class QuadTree(region: Region, root: Option[Vertex]) {}

case class Quad(point: Vec2f, data: List[String], region: Region)

object QuadTreeOps {
  def add(point: Vec2f, data: String, tree: QuadTree): QuadTree = {
    val v = add(point, List(data), tree.root, tree.region)
    tree.copy(root = Some(v))
  }

  def add(
      point: Vec2f,
      data: List[String],
      root: Option[Vertex],
      region: Region
  ): Vertex = root match {
    // vertex is free, setup leaf
    case None => Leaf(point, data)
    case Some(value) => value match {
        // vertex is node, check next matching quadrant
        case Node(children) =>
          val quadrant = region.quadrantOf(point)
          val v = add(
            point,
            data,
            children.get(quadrant),
            region.applyQuadrant(quadrant)
          )
          Node(children.updated(quadrant, v))
        case Leaf(p, d) =>
          // add data to leaf if position is the same
          if (p == point) { Leaf(p, d ++ data) }
          // vertex is leaf, transform it to node and raapply old point and current point
          else {
            val nodeWithOldLeaf = add(p, d, Some(Node(Map())), region)
            add(point, data, Some(nodeWithOldLeaf), region)
          }
      }
  }

  private val quadrantOrder: List[Quadrant] =
    List(TopLeft, TopRight, BottomLeft, BottomRight)

  def visitLeafs(tree: QuadTree): List[Quad] = {
    def traverse(v: Option[Vertex], region: Region): List[Quad] = v match {
      case None => List()
      case Some(value) => value match {
          case Node(children) => quadrantOrder.flatMap(quadrant =>
              traverse(children.get(quadrant), region.applyQuadrant(quadrant))
            )
          case Leaf(point, data) => List(Quad(point, data, region))
        }
    }

    traverse(tree.root, tree.region)
  }
}
