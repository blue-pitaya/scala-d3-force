package xyz.bluepitaya.d3force.forces

import xyz.bluepitaya.d3force._
import xyz.bluepitaya.d3force.quadtree._
import xyz.bluepitaya.common.Vec2f

object ManyBodyForce {
  case class Options(
      stength: Node => Double,
      distanceMin: Double,
      distanceMax: Double,
      theta: Double
  ) {
    val theta2 = theta * theta
    val distanceMin2 = distanceMin * distanceMin
    val distanceMax2 = distanceMax * distanceMax
  }

  val defaultOptions = Options(
    stength = _ => -30.0,
    distanceMin = 1.0,
    distanceMax = Double.MaxValue,
    theta = 0.9
  )

  case class VertexMetadata(point: Vec2f, value: Double)

  object VertexMetadata {
    def zero = VertexMetadata(Vec2f.zero, 0.0)
  }

  case class Params(p: Vec2f, w: Double, l: Double)

  def force(
      options: Options = defaultOptions
  )(nodes: Seq[Node], alpha: Double): Node => Force = {
    val dataPoints: Seq[(Vec2f, Node)] = nodes.map(n => (n.pos, n))
    val tree = QuadTreeOps.addAll[Node, Nothing](dataPoints)
    val accumulatedTree = QuadTreeOps
      .postorderMapMetadata(tree, leafAccumulate(options), nodeAccumulate)

    (node: Node) =>
      QuadTreeOps.preorderReduceData(
        accumulatedTree,
        vertexMapping(options, alpha, node),
        stopCondition(options, node),
        Force()
      )
  }

  private def jiggleParams(params: Params, options: Options): Params = {
    val x = params.p.x
    val y = params.p.y
    val l = params.l
    val nextP = params.p.jiggleIfZero
    val lJiggleX = if (x == 0) nextP.x * nextP.x else 0
    val lJiggleY = if (y == 0) nextP.y * nextP.y else 0
    val l2 = l + lJiggleX + lJiggleY
    val nextL =
      if (l2 < options.distanceMin2) Math.sqrt(options.distanceMin2 * l2)
      else l2

    params.copy(p = nextP, l = nextL)
  }

  private def vertexMapping(options: Options, alpha: Double, node: Node)(
      vertex: Vertex[Node, VertexMetadata],
      region: Region
  ): Force = {
    val metadata = vertex.metadata.getOrElse(VertexMetadata.zero)
    val params = calcParams(node, metadata, region, options)

    if (barnesHutCondition(params, options)) {
      if (params.l < options.distanceMax2) {
        val nextParams = jiggleParams(params, options)
        val nextVelocity = nextParams.p * metadata.value * alpha / nextParams.l;

        return Force(velocityChange = nextVelocity)
      } else Force()
    } else if (params.l >= options.distanceMax2) Force()
    else {
      vertex match {
        case Leaf(point, data, metadata) =>
          val nextParams =
            if (data.length > 1 || data.headOption != Some(node)) {
              jiggleParams(params, options)
            } else params
          data
            .foldLeft((Force(), params.w)) { (forceWithW, nodeData) =>
              val force = forceWithW._1
              val w = forceWithW._2
              if (nodeData != node) {
                val str = options.stength(nodeData)
                val nextW = (str * alpha) / nextParams.l
                val nextForce = force +
                  Force(velocityChange = nextParams.p * nextW)
                (nextForce, nextW)
              } else (force, w)
            }
            ._1
        case _ => Force()
      }
    }
  }

  private def barnesHutCondition(params: Params, options: Options): Boolean =
    (params.w * params.w) / options.theta2 < params.l

  private def stopCondition(
      options: Options,
      node: Node
  )(treeNode: TreeNode[Node, VertexMetadata], region: Region): Boolean = {
    treeNode
      .metadata
      .map { metadata =>
        val params = calcParams(node, metadata, region, options)
        barnesHutCondition(params, options)
      }
      .getOrElse(true)
  }

  private def calcParams(
      node: Node,
      metadata: VertexMetadata,
      region: Region,
      options: Options
  ): Params = {
    val x = metadata.point.x - node.pos.x
    val y = metadata.point.y - node.pos.y
    Params(p = Vec2f(x, y), w = region.p2.x - region.p1.x, l = x * x + y * y)
  }

  private def leafAccumulate(
      options: Options
  )(leaf: Leaf[Node, Nothing]): Option[VertexMetadata] = Some(VertexMetadata(
    leaf.point,
    leaf.data.foldLeft(0.0) { (acc, node) => acc + options.stength(node) }
  ))

  private def nodeAccumulate(
      oldMetadata: Option[Any],
      children: Map[Quadrant, Vertex[Node, VertexMetadata]]
  ): Option[VertexMetadata] = {
    val (strength, weight, x, y) = children
      .map(_._2)
      .foldLeft((0.0, 0.0, 0.0, 0.0)) { (value, v) =>
        val (s, w, _x, _y) = value
        val metadata = v.metadata.getOrElse(VertexMetadata.zero)
        val c = Math.abs(metadata.value)
        val nextS = s + metadata.value
        val nextW = w + c
        val nextX = _x + c * metadata.point.x
        val nextY = _y + c * metadata.point.y
        (nextS, nextW, nextX, nextY)
      }

    Some(VertexMetadata(Vec2f(x / weight, y / weight), strength))
  }
}
