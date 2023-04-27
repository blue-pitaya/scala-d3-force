package dev.bluepitaya.d3force

import dev.bluepitaya.d3force.Vec2f

case class SimulationSettings(
    alphaMin: Double,
    alphaDecay: Double,
    alphaTarget: Double,
    velocityDecay: Double,
    alphaChange: (Double, Double, Double) => Double
)

object SimulationSettings {
  def default = {
    val alphaMin = 0.001
    SimulationSettings(
      alphaMin = alphaMin,
      alphaDecay = 1 - Math.pow(alphaMin, 1.0 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      alphaChange = (alpha, target, decay) => alpha + (target - alpha) * decay
    )
  }
}

case class Node(
    id: String,
    pos: Vec2f,
    velocity: Vec2f = Vec2f.zero,
    isFixed: Boolean = false
) {
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
  def nextState(
      state: IterationState,
      settings: SimulationSettings,
      forces: Seq[IterationState => Node => Force]
  ): IterationState = {
    val nextAlpha = settings
      .alphaChange(state.alpha, settings.alphaTarget, settings.alphaDecay)
    val nextState = state.copy(alpha = nextAlpha)
    val forceFunctions = forces.map(_(nextState))

    val nextNodes = nextState
      .nodes
      .map(node => {
        val force = forceFunctions.foldLeft(Force()) { (_force, getForce) =>
          _force + getForce(node)
        }
        if (node.isFixed) node else node.applyForce(force)
      })
      .map(node =>
        if (node.isFixed) node else node.move(settings.velocityDecay)
      )
    nextState.copy(nodes = nextNodes, alpha = nextAlpha)
  }

  def nextStateAlphaAware(
      state: IterationState,
      settings: SimulationSettings,
      forces: Seq[IterationState => Node => Force]
  ): Option[IterationState] = Option
    .when(state.alpha >= settings.alphaMin)(nextState(state, settings, forces))

  def simulateN(
      nodes: Seq[Node],
      forces: Seq[IterationState => Node => Force],
      settings: SimulationSettings = SimulationSettings.default,
      n: Int
  ): IterationState = {
    def _simulate(state: IterationState, n: Int): IterationState =
      if (n == 0) state
      else { _simulate(nextState(state, settings, forces), n - 1) }

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
      else { _simulate(nextState(state, settings, forces)) }

    val state = IterationState(nodes = nodes, alpha = 1.0)

    _simulate(state)
  }
}
