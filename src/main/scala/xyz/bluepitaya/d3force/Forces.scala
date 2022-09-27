package xyz.bluepitaya.d3force

case class Force(
    positionChange: Vec2f = Vec2f.zero,
    velocityChange: Vec2f = Vec2f.zero
) {
  def +(f: Force) =
    Force(positionChange + f.positionChange, velocityChange + f.velocityChange)
}

object Force {
  def zero = Force(Vec2f.zero, Vec2f.zero)
}

object Forces {
  def centerForce(
      extraPoint: Vec2f,
      strength: Double
  ): SimulationState => Node => Force =
    s => center(extraPoint, strength)(s.nodes)

  def center(extraPoint: Vec2f, strength: Double)(
      nodes: Seq[Node]
  ): Node => Force = {
    val sumPoint = nodes.foldLeft(Vec2f.zero) { (sum, p) => sum + p.pos }
    val positionChange = (sumPoint / nodes.size - extraPoint) * strength * -1

    _ => Force(positionChange, Vec2f.zero)
  }

  def defaultDistance(link: Link) = 30.0

  // possible exception
  def defaultStrength(link: Link, inOutCount: Map[String, Int]) = 1.0 /
    Math.min(inOutCount(link.from), inOutCount(link.to))

  def link(
      distance: Link => Double,
      strength: Link => Double
  )(alpha: Double, links: Seq[Link], nodes: Seq[Node]): Node => Force = {
    val inOutCount = Utils.inOutCount(links)

    def getBias(link: Link) = for {
      fromCount <- inOutCount.get(link.from)
      toCount <- inOutCount.get(link.to)
    } yield (fromCount.toDouble / (fromCount + toCount).toDouble)

    val idToForce = links
      .flatMap { link =>
        lazy val str = strength(link)
        lazy val dist = distance(link)
        lazy val bias = getBias(link).getOrElse(0.0)

        val from = link.fromNode
        val to = link.toNode

        // some magic, i dont really understand it
        val xy = (to.pos + to.velocity - (from.pos + from.velocity))
          .jiggleIfZero
        val ll = (xy.magnitude - dist) / xy.magnitude * alpha * str
        val xy2 = xy * ll

        val targetVelocityChange = xy2 * bias * -1
        val sourceVelocityChange = xy2 * (1 - bias)

        Seq((from.id, sourceVelocityChange), (to.id, targetVelocityChange))
      }
      .groupMap { case (id, _) => id } { case (_, force) => force }
      .map { case (id, forces) => (id -> forces.foldLeft(Vec2f.zero)(_ + _)) }

    node =>
      idToForce.get(node.id).map(Force(Vec2f.zero, _)).getOrElse(Force.zero)
  }
}
