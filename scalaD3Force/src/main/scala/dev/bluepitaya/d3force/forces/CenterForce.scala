package dev.bluepitaya.d3force.forces

import dev.bluepitaya.d3force.Vec2f
import dev.bluepitaya.d3force.Node
import dev.bluepitaya.d3force.Force

object CenterForce {
  def force(point: Vec2f, strength: Double, nodes: Seq[Node]): Node => Force = {
    val sumPoint = nodes.foldLeft(Vec2f.zero) { (sum, p) => sum + p.pos }
    val positionChange = (sumPoint / nodes.size - point) * strength * -1

    _ => Force(positionChange, Vec2f.zero)
  }
}
