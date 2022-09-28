package example.forces

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.Lcg
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Simulation
import xyz.bluepitaya.d3force.SimulationSettings
import xyz.bluepitaya.d3force.IterationState
import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.forces.ManyBodyForce
import xyz.bluepitaya.d3force.quadtree._

class ManyBodyForceSpec extends AnyFlatSpec with Matchers {
  "single point on (0,0)" should "remain in same place" in {
    Lcg.reset
    val nodes = Seq(Node("1", Vec2f(0, 0)))
    val forces = Seq(ManyBodyForce.aForce())
    val settings = SimulationSettings.default.copy(alphaMin = 0.9)
    val result = Simulation.simulate(nodes, forces, settings)

    val expectedNodes = Seq(Node("1", Vec2f(0, 0), Vec2f(0, 0)))

    result.nodes shouldEqual expectedNodes
  }

  "two points on (0,0)" should "repulse each other on 1 tick" in {
    Lcg.reset
    val nodes = Seq(Node("a", Vec2f(0, 0)), Node("b", Vec2f(0, 0)))
    val forces = Seq(ManyBodyForce.aForce())
    val settings = SimulationSettings.default
    val result = Simulation.simulateN(nodes, forces, settings, 1)

    val expectedNodes = Seq(
      Node("a", Vec2f(15.758080131815227, 7.816681420541292)),
      Node("b", Vec2f(-0.36412200503460074, -17.58650087528485))
    )

    result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
      expectedNodes
  }

  "two points on (0,0)" should "repulse each other on 10 tick" in {
    Lcg.reset
    val nodes = Seq(Node("a", Vec2f(0, 0)), Node("b", Vec2f(0, 0)))
    val forces = Seq(ManyBodyForce.aForce())
    val settings = SimulationSettings.default
    val result = Simulation.simulateN(nodes, forces, settings, 10)

    val expectedNodes = Seq(
      Node("a", Vec2f(41.93439158567867, 23.799791423874424)),
      Node("b", Vec2f(-3.6821997140847422, -48.07665415507364))
    )

    result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
      expectedNodes
  }

  "two close points on random positions" should
    "repulse each other on 10 tick" in {
      Lcg.reset
      val nodes =
        Seq(Node("a", Vec2f(-3.113, -7.41)), Node("b", Vec2f(9.81, 6.66)))
      val forces = Seq(ManyBodyForce.aForce())
      val settings = SimulationSettings.default
      val result = Simulation.simulateN(nodes, forces, settings, 10)

      val expectedNodes = Seq(
        Node("a", Vec2f(-11.617783351249109, -16.66963799056527)),
        Node("b", Vec2f(18.314783351249115, 15.919637990565272))
      )

      result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
        expectedNodes
    }

  "three close points on random positions" should
    "repulse each other on 10 tick" in {
      Lcg.reset
      val nodes = Seq(
        Node("a", Vec2f(-3.113, -7.41)),
        Node("b", Vec2f(9.81, 6.66)),
        Node("c", Vec2f(10.01, 0.0))
      )
      val forces = Seq(ManyBodyForce.aForce())
      val settings = SimulationSettings.default
      val result = Simulation.simulateN(nodes, forces, settings, 10)

      val expectedNodes = Seq(
        Node("a", Vec2f(-22.26228682613966, -19.630143363669756)),
        Node("b", Vec2f(14.235513838851318, 33.24834357099881)),
        Node("c", Vec2f(24.811640517939132, -14.552029709055661))
      )

      result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
        expectedNodes
    }

  "three close points on random positions with random parameters" should
    "repulse each other on 10 tick" in {
      Lcg.reset
      val nodes = Seq(
        Node("a", Vec2f(-3.113, -7.41)),
        Node("b", Vec2f(9.81, 6.66)),
        Node("c", Vec2f(10.01, 0.0))
      )
      val options = ManyBodyForce.Options(
        stength = n => -150,
        distanceMin = 10,
        distanceMax = 1000,
        theta = 0.95
      )
      val forces = Seq(ManyBodyForce.aForce(options))
      val settings = SimulationSettings.default
      val result = Simulation.simulateN(nodes, forces, settings, 10)

      val expectedNodes = Seq(
        Node("a", Vec2f(-59.289315460492126, -44.004016738144074)),
        Node("b", Vec2f(22.952809434786, 78.11390237590852)),
        Node("c", Vec2f(53.43284367896008, -35.77903314639746))
      )

      result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
        expectedNodes
    }
}
