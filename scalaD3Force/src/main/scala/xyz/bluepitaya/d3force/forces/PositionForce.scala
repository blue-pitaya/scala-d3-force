package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.IterationState
import xyz.bluepitaya.d3force.Force
import xyz.bluepitaya.d3force.Vec2f

object PositionForce {
  def force(
      strength: Node => Double,
      point: Node => Vec2f,
      alpha: Double
  ): Node => Force = node =>
    Force(velocityChange = (point(node) - node.pos) * strength(node) * alpha)
}
