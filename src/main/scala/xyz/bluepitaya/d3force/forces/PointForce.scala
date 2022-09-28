package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.SimulationState
import xyz.bluepitaya.d3force.Force
import xyz.bluepitaya.d3force.Vec2f

object PointForce {
  case class Options(strength: Node => Double, point: Node => Vec2f)

  val defaultOptions = Options(strength = _ => 0.1, point = _ => Vec2f(0, 0))

  private def force(
      options: Options
  )(state: SimulationState)(node: Node): Force = {
    val velocityChange =
      (options.point(node) - node.pos) * options.strength(node) * state.alpha
    Force(velocityChange = velocityChange)
  }
}
