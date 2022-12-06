package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.ExampleData
import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.Lcg
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.d3

class LinkForceSpec extends AnyFlatSpec with Matchers {
  "link force of random points" should "be same as original d3" in {
    Lcg.reset()
    val result = d3
      .forceSimulation(ExampleData.fiveClosePoints)
      .force(d3.forceLink(ExampleData.linksOfFiveClosePoints).distance(50.0))
      .tick(10)

    val expected = Seq(
      Node("a", Vec2f(-15.042958224660252, -17.911928516692644), Vec2f(0, 0)),
      Node("b", Vec2f(20.831697099713057, 16.879404100924607), Vec2f(0, 0)),
      Node("c", Vec2f(25.662520658957096, 11.12517028157842), Vec2f(0, 0)),
      Node("d", Vec2f(-18.8359984090627, -13.560121450042336), Vec2f(0, 0)),
      Node("e", Vec2f(-1, 9), Vec2f(0, 0))
    )

    result.nodes.map(_.copy(velocity = Vec2f.zero)) shouldEqual expected
  }

  "points with invalid links" should "remain at same place" in {
    Lcg.reset()
    val links = Seq(Link("xd", "lol"), Link("elo", "wtf"))
    val result = d3
      .forceSimulation(ExampleData.fiveClosePoints)
      .force(d3.forceLink(links).distance(50.0))
      .tick(10)

    val expected = ExampleData.fiveClosePoints

    result.nodes.map(_.copy(velocity = Vec2f.zero)) shouldEqual expected
  }
}
