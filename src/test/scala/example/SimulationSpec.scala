package example

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.quadtree._
import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.Simulation

class SimulationSpec extends AnyFlatSpec with Matchers {
  def sut = Simulation
}
