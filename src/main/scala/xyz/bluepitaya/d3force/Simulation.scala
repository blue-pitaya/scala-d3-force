package xyz.bluepitaya.d3force

import xyz.bluepitaya.d3force.forces.Link

case class SimulationSettings(
    alphaMin: Double,
    alphaDecay: Double,
    alphaTarget: Double,
    velocityDecay: Double
)

object SimulationSettings {
  def default = {
    val alphaMin = 0.001
    SimulationSettings(
      alphaMin = alphaMin,
      alphaDecay = 1 - Math.pow(alphaMin, 1.0 / 300),
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

case class IterationState(nodes: Seq[Node], alpha: Double = 1.0)

object Simulation {
  def tick(
      state: IterationState,
      settings: SimulationSettings,
      forces: Seq[IterationState => Node => Force]
  ): IterationState = {
    val nextAlpha =
      state.alpha + (settings.alphaTarget - state.alpha) * settings.alphaDecay;

    val nextState = state.copy(alpha = nextAlpha)
    val forceFunctions = forces.map(_(nextState))

    val nextNodes = nextState
      .nodes
      .map(node => {
        val force = forceFunctions.foldLeft(Force()) { (_force, getForce) =>
          _force + getForce(node)
        }
        node.applyForce(force)
      })
      .map(_.move(settings.velocityDecay))
    nextState.copy(nodes = nextNodes, alpha = nextAlpha)
  }

  def simulateN(
      nodes: Seq[Node],
      forces: Seq[IterationState => Node => Force],
      settings: SimulationSettings = SimulationSettings.default,
      n: Int
  ): IterationState = {
    def _simulate(state: IterationState, n: Int): IterationState =
      if (n == 0) state else { _simulate(tick(state, settings, forces), n - 1) }

    val state = IterationState(nodes = nodes, alpha = 1.0)

    _simulate(state, n)
  }

  def simulate(
      nodes: Seq[Node],
      forces: Seq[IterationState => Node => Force],
      settings: SimulationSettings = SimulationSettings.default
  ): IterationState = {
    def _simulate(state: IterationState): IterationState =
      if (state.alpha < settings.alphaMin) state
      else { _simulate(tick(state, settings, forces)) }

    val state = IterationState(nodes = nodes, alpha = 1.0)

    _simulate(state)
  }
}
