package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force.Force
import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Vec2f

case class Link(from: String, to: String)

object LinkForce {
  def getInOutCount(links: Iterable[Link]) = links
    .flatMap(l => Seq(l.from, l.to))
    .groupBy(identity)
    .map { case (id, ids) => (id -> ids.size) }

  def defaultStrength(link: Link, links: Seq[Link]) = {
    val inOutCount = getInOutCount(links)
    val minCount = Math.min(inOutCount(link.from), inOutCount(link.to))
    1.0 / Math.max(minCount, 1)
  }

  def force(
      links: Seq[Link],
      distance: Link => Double,
      strength: (Link, Seq[Link]) => Double
  )(alpha: Double, nodes: Seq[Node]): Node => Force = {
    val inOutCount = getInOutCount(links)

    def getBias(link: Link) = for {
      fromCount <- inOutCount.get(link.from)
      toCount <- inOutCount.get(link.to)
    } yield (fromCount.toDouble / (fromCount + toCount).toDouble)

    // logic sam as in d3, but i think it may be not precise
    // beacuse of iterational node velocity changes
    val nextNodes = links.foldLeft(nodes) { (_nodes, link) =>
      lazy val str = strength(link, links)
      lazy val dist = distance(link)
      lazy val bias = getBias(link).getOrElse(0.0)

      def getNode(id: String) = _nodes.find(_.id == id)

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

        _nodes.map { n =>
          if (n.id == from.id) n
            .copy(velocity = n.velocity + sourceVelocityChange)
          else if (n.id == to.id) n
            .copy(velocity = n.velocity + targetVelocityChange)
          else n
        }
      }).getOrElse(_nodes)
    }

    node =>
      (nextNodes
        .find(_.id == node.id)
        .map(n => Force(velocityChange = n.velocity - node.velocity)))
        .getOrElse(Force())
  }
}
