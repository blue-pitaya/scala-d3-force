package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force._
import xyz.bluepitaya.common.Vec2f

case class Link(from: String, to: String)

object LinkForce {
  def getInOutCount(links: Iterable[Link]) = links
    .flatMap(l => Seq(l.from, l.to))
    .groupBy(identity)
    .map { case (id, ids) => (id -> ids.size) }

  def defaultStrength(link: Link, inOutCount: Map[String, Int]) = {
    val minCount = Math.min(inOutCount(link.from), inOutCount(link.to))
    1.0 / Math.max(minCount, 1)
  }

  def force(
      links: Seq[Link],
      distance: Link => Double,
      strengthOption: Option[Link => Double]
  )(alpha: Double, nodes: Seq[Node]): Node => Force = {
    val inOutCount = getInOutCount(links)

    def getBias(link: Link) = for {
      fromCount <- inOutCount.get(link.from)
      toCount <- inOutCount.get(link.to)
    } yield (fromCount.toDouble / (fromCount + toCount).toDouble)

    val strength = strengthOption
      .getOrElse((link: Link) => defaultStrength(link, inOutCount))
    val nodesMap = nodes.map(n => n.id -> n).toMap

    // logic sam as in d3, but i think it may be not precise
    // beacuse of iterational node velocity changes
    val nextNodes = links.foldLeft(nodesMap) { (_nodes, link) =>
      lazy val str = strength(link)
      lazy val dist = distance(link)
      lazy val bias = getBias(link).getOrElse(0.0)

      def getNode(id: String) = _nodes.get(id)

      (for {
        from <- getNode(link.from)
        to <- getNode(link.to)
      } yield {
        // some magic, i dont really understand it
        val xy = (to.pos + to.velocity - (from.pos + from.velocity))
          .jiggleIfZero
        val ll = (xy.magnitude - dist) / xy.magnitude * alpha * str
        val xy2 = xy * ll

        val targetVelocityChange = xy2 * bias * -1
        val sourceVelocityChange = xy2 * (1 - bias)

        _nodes
          .updated(
            from.id,
            from.copy(velocity = from.velocity + sourceVelocityChange)
          )
          .updated(
            to.id,
            to.copy(velocity = to.velocity + targetVelocityChange)
          )
      }).getOrElse(_nodes)
    }

    node =>
      (nextNodes
        .get(node.id)
        .map(n => Force(velocityChange = n.velocity - node.velocity)))
        .getOrElse(Force())
  }
}
