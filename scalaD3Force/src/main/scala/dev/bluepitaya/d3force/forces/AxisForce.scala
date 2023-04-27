package dev.bluepitaya.d3force.forces

import dev.bluepitaya.d3force.Force
import dev.bluepitaya.d3force.Node
import dev.bluepitaya.d3force.Vec2f

object AxisForce {
  sealed trait Axis
  final case object X extends Axis
  final case object Y extends Axis

  def force(
      strength: Node => Double,
      axis: Axis,
      value: Node => Double,
      alpha: Double
  ): Node => Force = node => {
    def f(axisPos: Double) = (value(node) - axisPos) * strength(node) * alpha

    val velocityChange = axis match {
      case X => Vec2f(f(node.pos.x), 0)
      case Y => Vec2f(0, f(node.pos.y))
    }
    Force(velocityChange = velocityChange)
  }
}
