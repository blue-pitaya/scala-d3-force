package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.Vec2f

case class Force(
    positionChange: Vec2f = Vec2f.zero,
    velocityChange: Vec2f = Vec2f.zero
) {
  def +(f: Force) =
    Force(positionChange + f.positionChange, velocityChange + f.velocityChange)
}

object Force {
  def zero = Force(Vec2f.zero, Vec2f.zero)

  type Apply = IterationState => Node => Force
}
