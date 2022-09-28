package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.forces.CenterForce
import xyz.bluepitaya.d3force.forces.PointForce

sealed trait ForceState {
  def id: Int
  def force: Force.Apply
}

case class CenterForceState(point: Vec2f = Vec2f.zero, _strength: Double = 1.0)
    extends ForceState {
  override def id = 0
  override def force: Force.Apply =
    s => CenterForce.force(point, _strength, s.nodes)

  def x(v: Double) = copy(point = Vec2f(v, point.y))
  def y(v: Double) = copy(point = Vec2f(point.x, v))
  def strength(v: Double) = copy(_strength = v)
}

case class SimState(
    _nodes: Seq[Node],
    settings: SimulationSettings,
    forces: Map[Int, ForceState] = Map(),
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

  def force(f: ForceState) = copy(forces =
    f match { case _: CenterForceState => forces.updated(f.id, f) }
  )

  def randomSource() = ???
  def on() = ???

}

object d3 {
  def forceCenter(x: Double = 0.0, y: Double = 0.0): CenterForceState =
    CenterForceState(Vec2f(x, y))

  def forceSimulation(nodes: Seq[Node] = Seq()): SimState =
    SimState(nodes, SimulationSettings.default)
}
