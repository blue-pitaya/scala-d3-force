package dev.bluepitaya.d3force.forces

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import dev.bluepitaya.d3force.Node
import dev.bluepitaya.d3force.d3
import dev.bluepitaya.d3force.Lcg
import dev.bluepitaya.d3force.Vec2f

class AxisForceSpec extends AnyFlatSpec with Matchers {
  "five points with fixed point and with force X and Y" should
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
        .force(d3.forceX().strength(0.1))
        .force(d3.forceY().strength(0.1))
        .tick(10)
        .nodes

      val expected = Seq(
        Node("a", pos = Vec2f.zero, isFixed = true),
        Node("b", pos = Vec2f(15.523805875166259, 3.582416740422983)),
        Node("c", pos = Vec2f(11.94138913474328, 18.50915315885208)),
        Node("d", pos = Vec2f(14.329666961691933, -1.7912083702114916)),
        Node("e", pos = Vec2f(5.373625110634475, 3.582416740422983))
      )

      expected shouldEqual result
    }
}
