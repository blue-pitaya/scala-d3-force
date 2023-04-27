package dev.bluepitaya.d3force

import dev.bluepitaya.d3force.forces.Link
import dev.bluepitaya.d3force.Vec2f

object ExampleData {
  def threeClosePoints = Seq(
    Node("a", Vec2f(-3.113, -7.41)),
    Node("b", Vec2f(9.81, 6.66)),
    Node("c", Vec2f(10.01, 0.0))
  )

  def fiveClosePoints = threeClosePoints ++
    Seq(Node("d", Vec2f(-5, -3)), Node("e", Vec2f(-1, 9)))

  def linksOfFiveClosePoints =
    Seq(Link("a", "b"), Link("a", "c"), Link("b", "d"))
}
