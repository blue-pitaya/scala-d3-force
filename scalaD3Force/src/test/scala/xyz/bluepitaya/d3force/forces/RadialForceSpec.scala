package xyz.bluepitaya.d3force.forces

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.ExampleData
import xyz.bluepitaya.d3force.Lcg
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.common.Vec2f
import xyz.bluepitaya.d3force.d3

class RadialForceSpec extends AnyFlatSpec with Matchers {
  "radial force of random points" should "be the same as original d3" in {
    Lcg.reset
    val result = d3
      .forceSimulation(ExampleData.fiveClosePoints)
      .force(d3.forceRadial(_ => 50).x(1.2).y(-1.2).strength(0.5))
      .tick(100)

    val expected = Seq(
      Node("a", Vec2f(-27.322021167672645, -42.2669490960462), Vec2f(0, 0)),
      Node("b", Vec2f(38.127060113744, 32.51041724669312), Vec2f(0, 0)),
      Node("c", Vec2f(50.74253441791842, 5.548131816288556), Vec2f(0, 0)),
      Node("d", Vec2f(-46.817311333211826, -15.140509741900203), Vec2f(0, 0)),
      Node("e", Vec2f(-9.341893611760995, 47.67605219998279), Vec2f(0, 0))
    )

    result.nodes.map(_.copy(velocity = Vec2f.zero)) shouldEqual expected
  }
}
