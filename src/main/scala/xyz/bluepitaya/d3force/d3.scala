package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.forces.CenterForce
import xyz.bluepitaya.d3force.forces.PointForce
import xyz.bluepitaya.d3force.forces.Link
import xyz.bluepitaya.d3force.forces.LinkForce

sealed trait ForceState {
  def force: Force.Apply
}

case class CenterForceState(point: Vec2f = Vec2f.zero, _strength: Double = 1.0)
    extends ForceState {
  override def force: Force.Apply =
    s => CenterForce.force(point, _strength, s.nodes)

  def x(v: Double) = copy(point = Vec2f(v, point.y))
  def y(v: Double) = copy(point = Vec2f(point.x, v))
  def strength(v: Double) = copy(_strength = v)
}

case class LinkForceState(
    _links: Seq[Link] = Seq(),
    _distance: Link => Double = _ => 30.0,
    _strength: (Link, Seq[Link]) => Double = LinkForce.defaultStrength
) extends ForceState {
  override def force: Force.Apply =
    s => LinkForce.force(_links, _distance, _strength)(s.alpha, s.nodes)

  def links(v: Seq[Link]) = copy(_links = v)
  def id() = ???
  def distance(v: Double) = copy(_distance = _ => v)
  def distance(v: Link => Double) = copy(_distance = v)
  def strength(v: (Link, Seq[Link]) => Double) = copy(_strength = v)
  def iterations() = ???

}

case class SimState(
    _nodes: Seq[Node],
    settings: SimulationSettings,
    forces: Map[String, ForceState] = Map(),
    _alpha: Double = 1.0
) {
  def restart() = ???
  def stop() = ???
  def tick(n: Int): IterationState = {
    val state = IterationState(nodes = _nodes, alpha = _alpha)
    val forcesSeq = forces.map(_._2.force).toSeq
    Simulation.simulateN(_nodes, forcesSeq, settings, n)
  }

  def nodes(v: Seq[Node]) = copy(_nodes = v)
  def alpha(v: Double) = copy(_alpha = v)
  def alphaMin(v: Double) = copy(settings = settings.copy(alphaMin = v))
  def alphaDecay(v: Double) = copy(settings = settings.copy(alphaDecay = v))
  def alphaTarget(v: Double) = copy(settings = settings.copy(alphaTarget = v))
  def velocityDecay(v: Double) =
    copy(settings = settings.copy(velocityDecay = v))

  def force(f: ForceState) =
    copy(forces = forces.updated(f.getClass().getCanonicalName(), f))

  def randomSource() = ???
  def on() = ???

}

object d3 {
  def forceCenter(x: Double = 0.0, y: Double = 0.0): CenterForceState =
    CenterForceState(Vec2f(x, y))

  def forceLink(links: Seq[Link] = Seq()): LinkForceState =
    LinkForceState(links)

  def forceSimulation(nodes: Seq[Node] = Seq()): SimState =
    SimState(nodes, SimulationSettings.default)
}
