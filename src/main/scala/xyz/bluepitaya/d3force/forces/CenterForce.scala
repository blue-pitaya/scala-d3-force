package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.SimulationState
import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Force

object CenterForce {
  def centerForce(
      extraPoint: Vec2f,
      strength: Double
  ): SimulationState => Node => Force =
    s => center(extraPoint, strength)(s.nodes)

  def center(extraPoint: Vec2f, strength: Double)(
      nodes: Seq[Node]
  ): Node => Force = {
    val sumPoint = nodes.foldLeft(Vec2f.zero) { (sum, p) => sum + p.pos }
    val positionChange = (sumPoint / nodes.size - extraPoint) * strength * -1

    _ => Force(positionChange, Vec2f.zero)
  }
}
