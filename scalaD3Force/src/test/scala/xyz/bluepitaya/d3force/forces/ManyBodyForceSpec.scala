package xyz.bluepitaya.d3force.forces

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.Lcg
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.d3

class ManyBodyForceSpec extends AnyFlatSpec with Matchers {
  def getResult(nodes: Seq[Node], n: Int) = d3
    .forceSimulation(nodes)
    .force(d3.forceManyBody())
    .tick(n)

  "single point on (0,0)" should "remain in same place" in {
    Lcg.reset()
    val nodes = Seq(Node("1", Vec2f(0, 0)))
    val result = d3
      .forceSimulation(nodes)
      .alphaMin(0.9)
      .force(d3.forceManyBody())
      .simulate()

    val expectedNodes = Seq(Node("1", Vec2f(0, 0), Vec2f(0, 0)))

    result.nodes shouldEqual expectedNodes
  }

  "two points on (0,0)" should "repulse each other on 1 tick" in {
    Lcg.reset()
    val nodes = Seq(Node("a", Vec2f(0, 0)), Node("b", Vec2f(0, 0)))
    val result = getResult(nodes, 1)

    val expectedNodes = Seq(
      Node("a", Vec2f(15.758080131815227, 7.816681420541292)),
      Node("b", Vec2f(-0.36412200503460074, -17.58650087528485))
    )

    result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
      expectedNodes
  }

  "two points on (0,0)" should "repulse each other on 10 tick" in {
    Lcg.reset()
    val nodes = Seq(Node("a", Vec2f(0, 0)), Node("b", Vec2f(0, 0)))
    val result = getResult(nodes, 10)

    val expectedNodes = Seq(
      Node("a", Vec2f(41.93439158567867, 23.799791423874424)),
      Node("b", Vec2f(-3.6821997140847422, -48.07665415507364))
    )

    result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
      expectedNodes
  }

  "two close points on random positions" should
    "repulse each other on 10 tick" in {
      Lcg.reset()
      val nodes =
        Seq(Node("a", Vec2f(-3.113, -7.41)), Node("b", Vec2f(9.81, 6.66)))
      val result = getResult(nodes, 10)

      val expectedNodes = Seq(
        Node("a", Vec2f(-11.617783351249109, -16.66963799056527)),
        Node("b", Vec2f(18.314783351249115, 15.919637990565272))
      )

      result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
        expectedNodes
    }

  "three close points on random positions" should
    "repulse each other on 10 tick" in {
      Lcg.reset()
      val nodes = Seq(
        Node("a", Vec2f(-3.113, -7.41)),
        Node("b", Vec2f(9.81, 6.66)),
        Node("c", Vec2f(10.01, 0.0))
      )
      val result = getResult(nodes, 10)

      val expectedNodes = Seq(
        Node("a", Vec2f(-22.26228682613966, -19.630143363669756)),
        Node("b", Vec2f(14.235513838851318, 33.24834357099881)),
        Node("c", Vec2f(24.811640517939132, -14.55202970905566))
      )

      result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
        expectedNodes
    }

  "three close points on random positions with random parameters" should
    "repulse each other on 10 tick" in {
      Lcg.reset()
      val nodes = Seq(
        Node("a", Vec2f(-3.113, -7.41)),
        Node("b", Vec2f(9.81, 6.66)),
        Node("c", Vec2f(10.01, 0.0))
      )
      val result = d3
        .forceSimulation(nodes)
        .force(
          d3.forceManyBody()
            .strength(-150)
            .distanceMin(10)
            .distanceMax(1000)
            .theta(0.95)
        )
        .tick(10)

      val expectedNodes = Seq(
        Node("a", Vec2f(-59.289315460492126, -44.004016738144074)),
        Node("b", Vec2f(22.952809434786, 78.11390237590852)),
        Node("c", Vec2f(53.43284367896008, -35.77903314639746))
      )

      result.nodes.map(n => n.copy(velocity = Vec2f.zero)) shouldEqual
        expectedNodes
    }

  "five points, one with fixed position, with theta 0.99 and charge -1000" should
    "match original d3" in {
      val nodes = Seq(
        Node("a", pos = Vec2f.zero, isFixed = true),
        Node("b", pos = Vec2f(-26, -6)),
        Node("c", pos = Vec2f(-20, -31)),
        Node("d", pos = Vec2f(-24, 3)),
        Node("e", pos = Vec2f(-9, -6))
      )

      val result = d3
        .forceSimulation(nodes)
        .velocityDecay(0.1)
        .force(d3.forceManyBody().theta(0.99).strength(-1000))
        .tick(300)
        .nodes

      val expected = Seq(
        Node("a", pos = Vec2f.zero, isFixed = true),
        Node("b", pos = Vec2f(-2053.787279844109, -924.0358860564105)),
        Node("c", pos = Vec2f(-148.95239174959636, -2110.081228076598)),
        Node("d", pos = Vec2f(-867.0843019177397, 2283.2225612303987)),
        Node("e", pos = Vec2f(1540.2507140446392, -671.8347162049947))
      )

      result shouldEqual expected
    }
}
