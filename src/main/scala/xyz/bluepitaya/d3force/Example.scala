package xyz.bluepitaya.d3force

object Example extends App {
  val nodes = Seq(Node(id = "1", pos = Vec2f(0, 0), velocity = Vec2f(0, 0)))
  val links = Seq()
  val forces = Seq(Forces.centerForce(Vec2f(100, 100), 0.01))
  val settings = SimulationSettings.default.copy(alphaMin = 0.5)

  val finalState = Simulation
    .simulate(nodes, links, forces, settings, s => println(s))

  println(finalState.nodes)
}
