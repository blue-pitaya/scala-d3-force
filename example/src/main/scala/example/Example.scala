package example

import xyz.bluepitaya.d3force.Node
import xyz.bluepitaya.d3force.Vec2f
import xyz.bluepitaya.d3force.d3
import xyz.bluepitaya.d3force.forces.Link

import scala.scalajs.js
import scala.scalajs.js.JSConverters._
import scala.scalajs.js.annotation._
import scala.util.Random

@JSExportAll
case class Vec2d(x: Int, y: Int)

@JSExportAll
case class JsNode(id: String, position: Vec2d, velocity: Vec2d)

@JSExportAll
case class JsLink(source: String, target: String)

@JSExportAll
case class JsData(nodes: js.Array[JsNode], links: js.Array[JsLink])

object Example {
  lazy val exampleData = randomData(100)

  @JSExportTopLevel("getData")
  def getData(): JsData = JsData(
    exampleData._1.map(toJsNode).toJSArray,
    exampleData._2.map(toJsLink).toJSArray
  )

  @JSExportTopLevel("mySimulation")
  def mySimulation(): js.Array[JsNode] = {
    d3.forceSimulation(exampleData._1)
      .velocityDecay(0.1)
      .force(d3.forceLink(exampleData._2).distance(80))
      .force(d3.forceManyBody().theta(0.99).strength(-1000))
      .force(d3.forceX().strength(0.1))
      .force(d3.forceY().strength(0.1))
      .simulate()
      .nodes
      .map(toJsNode)
      .toJSArray
  }

  def toJsNode(v: Node) = JsNode(v.id, toVec2d(v.pos), toVec2d(v.velocity))

  def toJsLink(v: Link) = JsLink(v.from, v.to)

  def toVec2d(v: Vec2f) = Vec2d(v.x.toInt, v.y.toInt)

  def toVec2f(v: Vec2d) = Vec2f(v.x, v.y)

  def randomData(n: Int): (Seq[Node], Seq[Link]) = {
    def randomPos = Vec2d(Random.nextInt(100) - 50, Random.nextInt(100) - 50)

    def makeTree(
        nodes: List[Node],
        parents: List[Node],
        res: Seq[Link]
    ): Seq[Link] = nodes match {
      case Nil => res
      case node :: rest =>
        val parent = Random.shuffle(parents).headOption
        val nextRes = parent.map(p => res :+ Link(p.id, node.id)).getOrElse(res)
        makeTree(rest, parents :+ node, nextRes)
    }

    val nodes = (0 until n)
      .map(i => Node(id = i.toString(), pos = toVec2f(randomPos)))
      .map(n => {
        val x = if (n.id == "0") n.copy(isFixed = true, pos = Vec2f.zero) else n
        x
      })
      .toSeq

    val links = makeTree(nodes.toList, List(), List())

    (nodes, links)
  }
}
