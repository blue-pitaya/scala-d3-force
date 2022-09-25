package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Force
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.quadtree.Quad

object ManyBody {
  case class Options(
      stength: Node => Double,
      distanceMin: Double,
      distanceMax: Double,
      theta: Double
  )

  val defaultOptions = Options(
    stength = _ => 30.0,
    distanceMin = 1.0,
    distanceMax = Double.MaxValue,
    theta = 0.81
  )

  def force(options: Options = defaultOptions)(
      nodes: Seq[Node]
  ): Node => Force = ???

  private def accumulate(quad: Quad): Quad = {
    ???
  }
}
