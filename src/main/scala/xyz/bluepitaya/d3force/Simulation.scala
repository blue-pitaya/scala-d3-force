package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.forces.Link

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

case class Node(id: String, pos: Vec2f, velocity: Vec2f = Vec2f.zero) {
  def move(velocityDecay: Double): Node = {
    val nextVelocity = velocity * velocityDecay;
    val nextPos = pos + nextVelocity
    copy(pos = nextPos, velocity = nextVelocity)
  }

  def applyForce(force: Force): Node = {
    copy(
      pos = pos + force.positionChange,
      velocity = velocity + force.velocityChange
    )
  }
}

case class SimulationState(
    nodes: Seq[Node],
    links: Seq[Link] = Seq(),
    alpha: Double = 1.0
)

object Simulation {
  def preprareState(nodes: Seq[Node], links: Seq[Link]): SimulationState = ???

  def tick(
      state: SimulationState,
      settings: SimulationSettings,
      forces: Seq[SimulationState => Node => Force]
  ): SimulationState = {
    val nextAlpha =
      state.alpha + (settings.alphaTarget - state.alpha) * settings.aplhaDecay;

    val nextState = state.copy(alpha = nextAlpha)

    def force(n: Node) = forces
      .map(f => f(nextState)(n))
      .foldLeft(Force.zero) { (a, b) =>
        //
        a + b
      }

    val nextNodes = nextState
      .nodes
      .map(node => {
        val f = force(node)
        node.applyForce(f)
      })
    val nextNodes2 = nextNodes.map(_.move(settings.velocityDecay))
    nextState.copy(nodes = nextNodes2, alpha = nextAlpha)
  }

  def simulateN(
      nodes: Seq[Node],
      links: Seq[Link],
      forces: Seq[SimulationState => Node => Force],
      settings: SimulationSettings = SimulationSettings.default,
      n: Int
  ): SimulationState = {
    def _simulate(state: SimulationState, n: Int): SimulationState =
      if (n == 0) state else { _simulate(tick(state, settings, forces), n - 1) }

    val state = SimulationState(nodes = nodes, links = links, alpha = 1.0)

    _simulate(state, n)
  }

  def simulate(
      nodes: Seq[Node],
      links: Seq[Link],
      forces: Seq[SimulationState => Node => Force],
      settings: SimulationSettings = SimulationSettings.default
  ): SimulationState = {
    def _simulate(state: SimulationState): SimulationState =
      if (state.alpha < settings.alphaMin) state
      else { _simulate(tick(state, settings, forces)) }

    val state = SimulationState(nodes = nodes, links = links, alpha = 1.0)

    _simulate(state)
  }
}
