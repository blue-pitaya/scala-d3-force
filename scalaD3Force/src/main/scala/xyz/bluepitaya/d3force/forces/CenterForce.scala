package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Force

object CenterForce {
  def force(point: Vec2f, strength: Double, nodes: Seq[Node]): Node => Force = {
    val sumPoint = nodes.foldLeft(Vec2f.zero) { (sum, p) => sum + p.pos }
    val positionChange = (sumPoint / nodes.size - point) * strength * -1

    _ => Force(positionChange, Vec2f.zero)
  }
}
