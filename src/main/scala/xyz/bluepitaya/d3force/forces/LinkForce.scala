package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Force
import xyz.bluepitaya.d3force.Vec2f

case class Link(from: String, to: String, fromNode: Node, toNode: Node)

object LinkForce {
  def defaultDistance(link: Link) = 30.0

  // possible exception
  def defaultStrength(link: Link, inOutCount: Map[String, Int]) = 1.0 /
    Math.min(inOutCount(link.from), inOutCount(link.to))

  def getInOutCount(links: Iterable[Link]) = links
    .flatMap(l => Seq(l.from, l.to))
    .groupBy(identity)
    .map { case (id, ids) => (id -> ids.size) }

  def link(
      distance: Link => Double,
      strength: Link => Double
  )(alpha: Double, links: Seq[Link], nodes: Seq[Node]): Node => Force = {
    val inOutCount = getInOutCount(links)

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
