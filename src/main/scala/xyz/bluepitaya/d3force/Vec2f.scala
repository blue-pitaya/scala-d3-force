package xyz.bluepitaya.d3force

case class Vec2f(val x: Double, val y: Double) {
  def +(v: Vec2f) = Vec2f(x + v.x, y + v.y)
  def -(v: Vec2f) = Vec2f(x - v.x, y - v.y)
  def *(n: Double) = Vec2f(x * n, y * n)
  def /(n: Double) = Vec2f(x / n, y / n)

  lazy val magnitude = Math.sqrt(x * x + y * y)
  lazy val normalize = this / magnitude

  def jiggleIfZero =
    Vec2f(x = if (x == 0) Lcg.jiggle else x, y = if (y == 0) Lcg.jiggle else y)

  def floor = Vec2f(Math.floor(x), Math.floor(y))
}

object Vec2f {
  def zero = Vec2f(0.0, 0.0)
}
