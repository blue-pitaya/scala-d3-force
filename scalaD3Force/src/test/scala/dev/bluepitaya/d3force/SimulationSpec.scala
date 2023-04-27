package dev.bluepitaya.d3force

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import dev.bluepitaya.d3force.Vec2f

//TODO:
class SimulationSpec extends AnyFlatSpec with Matchers {

  // this test must pass!
  "five points with theta 0.99 and charge -1000 with force X and Y" should
    "match original d3" in {
      Lcg.reset()
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
        .force(d3.forceX().strength(0.1))
        .force(d3.forceY().strength(0.1))
        .tick(300)
        .nodes

      val expected = Seq(
        Node("a", pos = Vec2f.zero, isFixed = true),
        Node("b", pos = Vec2f(-143.5359580466657, 66.2543348696558)),
        Node("c", pos = Vec2f(-66.26722198044175, -143.54951914750544)),
        Node("d", pos = Vec2f(143.53615887906258, -66.34433598953407)),
        Node("e", pos = Vec2f(66.1772132575984, 143.60883218459568))
      )

      result.map(_.copy(velocity = Vec2f.zero)) shouldEqual expected
    }

  "simulation with different kinds of forces" should
    "behave as in original d3" in {
      Lcg.reset()
      val nodes = ExampleData.fiveClosePoints
      val links = ExampleData.linksOfFiveClosePoints
      val result = d3
        .forceSimulation(nodes)
        .force(d3.forceLink(links))
        .force(d3.forceManyBody())
        .force(d3.forceX().x(1.0))
        .force(d3.forceY().y(-1.0))
        .tick(200)

      val expected = Seq(
        Node("a", Vec2f(-1.00328, -23.5294), Vec2f(0, 0)),
        Node("b", Vec2f(8.90035, 6.32949), Vec2f(0, 0)),
        Node("c", Vec2f(26.84101, -11.58169), Vec2f(0, 0)),
        Node("d", Vec2f(-20.56217, -2.40199), Vec2f(0, 0)),
        Node("e", Vec2f(-7.62675, 26.56455), Vec2f(0, 0))
      )

      result
        .nodes
        .map(n =>
          n.copy(pos = n.pos.round(5), velocity = Vec2f.zero)
        ) shouldEqual expected
    }

  //// force center strength 10 is too big, and fricks whole system
  // "simulation" should "not raise stack overflow error" in {
  //  val nodes = List(
  //    Node("6J0X", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("8UnP", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("ps5c", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("hxY6", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("yXWl", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("9W6V", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("tiV0", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("gNFh", Vec2f(0, 0), Vec2f(0, 0)),
  //    Node("RUGq", Vec2f(0, 0), Vec2f(0, 0))
  //  )
  //  val links = List(
  //    Link("9W6V", "gNFh"),
  //    Link("ps5c", "hxY6"),
  //    Link("gNFh", "RUGq"),
  //    Link("9W6V", "tiV0"),
  //    Link("6J0X", "9W6V"),
  //    Link("6J0X", "8UnP"),
  //    Link("6J0X", "ps5c"),
  //    Link("ps5c", "yXWl")
  //  )

  //  val iterationState = d3
  //    .forceSimulation(nodes)
  //    .force(d3.forceLink(links).distance(0).strength(-0.01))
  //    .force(d3.forceManyBody().strength(-5))
  //    .force(d3.forceCenter().strength(10))
  //    .tick(300)
  // }
}
