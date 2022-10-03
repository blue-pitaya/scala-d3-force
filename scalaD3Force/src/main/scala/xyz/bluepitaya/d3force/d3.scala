package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.forces.CenterForce
import xyz.bluepitaya.d3force.forces.PositionForce
import xyz.bluepitaya.d3force.forces.Link
import xyz.bluepitaya.d3force.forces.LinkForce
import xyz.bluepitaya.d3force.forces.ManyBodyForce
import xyz.bluepitaya.d3force.forces.RadialForce

sealed trait ForceState {
  def forceId: String
  def force: Force.Apply
}

case class CenterForceState(point: Vec2f = Vec2f.zero, _strength: Double = 1.0)
    extends ForceState {
  override def forceId: String = "center"
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
  override def forceId: String = "link"
  override def force: Force.Apply =
    s => LinkForce.force(_links, _distance, _strength)(s.alpha, s.nodes)

  def links(v: Seq[Link]) = copy(_links = v)
  def distance(v: Double) = copy(_distance = _ => v)
  def distance(v: Link => Double) = copy(_distance = v)
  def strength(v: Double) = copy(_strength = (_, _) => v)
  def strength(v: (Link, Seq[Link]) => Double) = copy(_strength = v)

  // def id() = ???
  // def iterations() = ???
}

case class ManyBodyForceState(
    options: ManyBodyForce.Options = ManyBodyForce.defaultOptions
) extends ForceState {
  override def forceId: String = "charge"
  override def force: Force.Apply =
    s => ManyBodyForce.force(options)(s.nodes, s.alpha)

  def strength(v: Node => Double) = copy(options = options.copy(stength = v))
  def strength(v: Double) = copy(options = options.copy(stength = _ => v))
  def theta(v: Double) = copy(options = options.copy(theta = v))
  def distanceMin(v: Double) = copy(options = options.copy(distanceMin = v))
  def distanceMax(v: Double) = copy(options = options.copy(distanceMax = v))
}

case class XForceState(
    _strength: Node => Double = _ => 0.1,
    x: Node => Double = _ => 0.0
) extends ForceState {
  override def forceId: String = "x"
  override def force: Force.Apply =
    s => PositionForce.force(_strength, n => Vec2f(x(n), 0.0), s.alpha)

  def strength(v: Double) = copy(_strength = _ => v)
  def strength(v: Node => Double) = copy(_strength = v)
  def x(v: Node => Double) = copy(x = v)
  def x(v: Double) = copy(x = _ => v)
}

case class YForceState(
    _strength: Node => Double = _ => 0.1,
    y: Node => Double = _ => 0.0
) extends ForceState {
  override def forceId: String = "y"
  override def force: Force.Apply =
    s => PositionForce.force(_strength, n => Vec2f(0.0, y(n)), s.alpha)

  def strength(v: Double) = copy(_strength = _ => v)
  def strength(v: Node => Double) = copy(_strength = v)
  def y(v: Node => Double) = copy(y = v)
  def y(v: Double) = copy(y = _ => v)
}

case class RadialForceState(
    _radius: Node => Double,
    _strength: Node => Double = _ => 0.1,
    point: Vec2f = Vec2f(0, 0)
) extends ForceState {
  override def forceId: String = "radial"
  override def force: Force.Apply =
    s => RadialForce.force(_strength, point, _radius, s.alpha)

  def strength(v: Double) = copy(_strength = _ => v)
  def strength(v: Node => Double) = copy(_strength = v)
  def x(v: Double) = copy(point = Vec2f(v, point.y))
  def y(v: Double) = copy(point = Vec2f(point.x, v))
  def radius(v: Double) = copy(_radius = _ => v)
  def radius(v: Node => Double) = copy(_radius = v)
}

case class SimulationState(
    _nodes: Seq[Node],
    settings: SimulationSettings,
    forces: Map[String, ForceState] = Map(), // TODO: change to seq
    _alpha: Double = 1.0
) {
  // def restart() = ???
  // def stop() = ???
  // def randomSource() = ???
  // def on() = ???

  private lazy val forcesSeq = forces.map(_._2.force).toSeq

  def tick(n: Int): IterationState = Simulation
    .simulateN(_nodes, forcesSeq, settings, n)
  def simulate(): IterationState = Simulation
    .simulate(_nodes, forcesSeq, settings)

  def nodes(v: Seq[Node]) = copy(_nodes = v)
  def alpha(v: Double) = copy(_alpha = v)
  def alphaMin(v: Double) = copy(settings = settings.copy(alphaMin = v))
  def alphaDecay(v: Double) = copy(settings = settings.copy(alphaDecay = v))
  def alphaTarget(v: Double) = copy(settings = settings.copy(alphaTarget = v))
  def velocityDecay(v: Double) =
    copy(settings = settings.copy(velocityDecay = v))

  def force(f: ForceState) = copy(forces = forces.updated(f.forceId, f))
}

object d3 {
  def forceSimulation(nodes: Seq[Node] = Seq()): SimulationState =
    SimulationState(nodes, SimulationSettings.default)

  def forceCenter(x: Double = 0.0, y: Double = 0.0): CenterForceState =
    CenterForceState(Vec2f(x, y))

  def forceLink(links: Seq[Link] = Seq()): LinkForceState =
    LinkForceState(links)

  def forceManyBody(): ManyBodyForceState = ManyBodyForceState()

  def forceX(): XForceState = XForceState()

  def forceY(): YForceState = YForceState()

  def forceRadial(
      radius: Node => Double,
      x: Double = 0,
      y: Double = 0
  ): RadialForceState = RadialForceState(radius, point = Vec2f(0, 0))
}
