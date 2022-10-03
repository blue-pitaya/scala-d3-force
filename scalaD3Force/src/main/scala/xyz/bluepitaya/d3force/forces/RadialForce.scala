package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Force
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Vec2f

object RadialForce {
  def force(
      strength: Node => Double,
      point: Vec2f,
      radius: Node => Double,
      alpha: Double
  ): Node => Force = node => {
    val d = (node.pos - point).smallValueIfZero
    val r = d.magnitude
    val k = (radius(node) - r) * strength(node) * alpha / r;

    Force(velocityChange = d * k)
  }
}
