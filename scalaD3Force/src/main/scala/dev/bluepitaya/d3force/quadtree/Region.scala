package dev.bluepitaya.d3force.quadtree

import dev.bluepitaya.d3force.Vec2f

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
  def square(x: Double, y: Double, a: Double): Region = {
    val from = Vec2f(x, y)
    Region(from, from + Vec2f(a, a))
  }
}
