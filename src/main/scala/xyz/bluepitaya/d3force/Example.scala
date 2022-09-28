package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.forces.ManyBody

object Example extends App {
  val nodes = Seq(Node(id = "1", pos = Vec2f(0, 0), velocity = Vec2f(0, 0)))
  val links = Seq()
  val forces = Seq(ManyBody.aForce())
  val settings = SimulationSettings.default.copy(alphaMin = 0.9)

  val finalState = Simulation.simulate(nodes, links, forces, settings)
}
