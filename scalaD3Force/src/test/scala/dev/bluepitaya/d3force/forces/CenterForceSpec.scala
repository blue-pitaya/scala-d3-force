package dev.bluepitaya.d3force.forces

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import dev.bluepitaya.d3force.Lcg
import dev.bluepitaya.d3force.ExampleData
import dev.bluepitaya.d3force.d3
import dev.bluepitaya.d3force.Node
import dev.bluepitaya.d3force.Vec2f

class CenterForceSpec extends AnyFlatSpec with Matchers {
  "center force of random points" should "be the same as original d3" in {
    Lcg.reset()
    val result = d3
      .forceSimulation(ExampleData.threeClosePoints)
      .force(d3.forceCenter().x(1.2).y(-1.2).strength(0.5))
      .tick(10)

    val expected = Seq(
      Node("a", Vec2f(-7.4777333984375, -8.359072265625), Vec2f(0, 0)),
      Node("b", Vec2f(5.4452666015625, 5.710927734375001), Vec2f(0, 0)),
      Node("c", Vec2f(5.6452666015625, -0.949072265625), Vec2f(0, 0))
    )

    result.nodes shouldEqual expected
  }
}
