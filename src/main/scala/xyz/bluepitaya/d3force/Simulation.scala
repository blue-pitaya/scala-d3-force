package xyz.bluepitaya.d3force

case class SimulationSettings(
    alphaMin: Double,
    aplhaDecay: Double,
    alphaTarget: Double,
    velocityDecay: Double
)

object SimulationSettings {
  def default = {
    val alphaMin = 0.001
    SimulationSettings(
      alphaMin = alphaMin,
      aplhaDecay = 1 - Math.pow(alphaMin, 1.0 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6
    )
  }
}

case class Node(id: String, pos: Vec2f, velocity: Vec2f) {
  def move(velocityDecay: Double): Node = {
    val nextPos = pos + velocity
    val nextVelocity = velocity * velocityDecay;
    copy(pos = nextPos, velocity = nextVelocity)
  }

  def applyForce(force: Force): Node = {
    copy(
      pos = pos + force.positionChange,
      velocity = velocity + force.velocityChange
    )
  }
}

case class Link(from: String, to: String, fromNode: Node, toNode: Node)

case class SimulationState(nodes: Seq[Node], links: Seq[Link], alpha: Double)

object Simulation {
  def tick(
      state: SimulationState,
      settings: SimulationSettings,
      forces: Seq[SimulationState => Node => Force]
  ): SimulationState = {
    val nextAlpha =
      state.alpha + (settings.alphaTarget - state.alpha) * settings.aplhaDecay;

    def force(n: Node) = forces
      .map(f => f(state)(n))
      .foldLeft(Force.zero)(_ + _)

    val nextNodes = state
      .nodes
      .map(node => node.applyForce(force(node)))
      .map(_.move(settings.velocityDecay))

    state.copy(nodes = nextNodes, alpha = nextAlpha)
  }

  def simulate(
      nodes: Seq[Node],
      links: Seq[Link],
      forces: Seq[SimulationState => Node => Force],
      settings: SimulationSettings,
      onTick: SimulationState => Unit = s => ()
  ): SimulationState = {
    def _simulate(state: SimulationState): SimulationState =
      if (state.alpha < settings.alphaMin) state
      else {
        onTick(state)
        _simulate(tick(state, settings, forces))
      }

    val state = SimulationState(nodes = nodes, links = links, alpha = 1.0)

    _simulate(state)
  }
}

object Utils {
  def inOutCount(links: Iterable[Link]) = links
    .flatMap(l => Seq(l.from, l.to))
    .groupBy(identity)
    .map { case (id, ids) => (id -> ids.size) }
}
