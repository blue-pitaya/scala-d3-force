package xyz.bluepitaya.d3force

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

class SimulationSpec extends AnyFlatSpec with Matchers {
  "simulation with different kinds of forces" should
    "behave as in original d3" in {
      Lcg.reset
      val nodes = ExampleData.fiveClosePoints
      val links = ExampleData.linksOfFiveClosePoints
      val result = d3
        .forceSimulation(nodes)
        .force(d3.forceCenter())
        .force(d3.forceLink(links))
        .force(d3.forceManyBody())
        .force(d3.forceX().x(1.0))
        .force(d3.forceY().y(-1.0))
        .tick(200)

      // this points differ from original d3, but behave in similar way
      val expected = Seq(
        Node("a", Vec2f(1.0507086090870659, -18.147203317721477), Vec2f(0, 0)),
        Node("b", Vec2f(6.110591533009633, 11.657540856811096), Vec2f(0, 0)),
        Node("c", Vec2f(21.649461740077555, 1.5287392824094017), Vec2f(0, 0)),
        Node("d", Vec2f(-16.308073309604318, -7.906786293862084), Vec2f(0, 0)),
        Node("e", Vec2f(-12.49024169156734, 12.864531487810286), Vec2f(0, 0))
      )

      result.nodes.map(_.copy(velocity = Vec2f.zero)) shouldEqual expected
    }
}
