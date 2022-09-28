package example

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.quadtree._
import xyz.bluepitaya.d3force.Vec2f

class QuadTreeOpsSpec extends AnyFlatSpec with Matchers {
  def sut = QuadTreeOps

  private val exampleRegion = Region(Vec2f(0, 0), Vec2f(128, 128))
  private val node3 = TreeNode[String, Any](Map(
    BottomLeft -> Leaf(Vec2f(65, 80), List("E")),
    BottomRight -> Leaf(Vec2f(80, 90), List("F"))
  ))
  private val node2 = TreeNode[String, Any](Map(TopLeft -> node3))
  private val node1 = TreeNode[String, Any](Map(
    TopLeft -> Leaf(Vec2f(70, 10), List("C")),
    BottomLeft -> Leaf(Vec2f(69, 50), List("D", "D2"))
  ))
  private val node0 = TreeNode[String, Any](Map(
    TopLeft -> Leaf(Vec2f(40, 45), List("A")),
    TopRight -> node1,
    BottomLeft -> Leaf(Vec2f(15, 70), List("B")),
    BottomRight -> node2
  ))
  private def exampleQuadTree = QuadTree(exampleRegion, Some(node0))

  "adding example" should "be ok" in {
    val tree = QuadTree(exampleRegion, None)
    val points = List(
      (Vec2f(40, 45), "A"),
      (Vec2f(15, 70), "B"),
      (Vec2f(70, 10), "C"),
      (Vec2f(69, 50), "D"),
      (Vec2f(65, 80), "E"),
      (Vec2f(80, 90), "F"),
      (Vec2f(69, 50), "D2")
    )

    val expected = exampleQuadTree

    val result = points
      .foldLeft(QuadTree[String, Any](exampleRegion, None)) { (tree, p) =>
        sut.add(p._1, p._2, tree)
      }

    result shouldEqual expected
  }

  "adding close points" should "not cause stack overflow" in {
    val region = Region(Vec2f(0, 0), Vec2f(100, 100))
    val step = 1e-10
    val center = Vec2f(0, 0)
    val points = (1 until 320000).map { i =>
      val stepI = step * i
      val p = center + Vec2f(stepI, stepI)
      val d = stepI.toString()
      (p, d)
    }

    points.foldLeft(QuadTree[String, Any](region, None)) { (tree, p) =>
      sut.add(p._1, p._2, tree)
    }
  }

  // "visit" should "be ok" in {
  //  val expected = List[Quad[String, Any]](
  //    Quad(node0, Region.square(0, 0, 128)),
  //    Quad(Leaf(Vec2f(40, 45), List("A")), Region(Vec2f(0, 0), Vec2f(64, 64))),
  //    Quad(node1, Region.square(64, 0, 64)),
  //    Quad(Leaf(Vec2f(70, 10), List("C")), Region(Vec2f(64, 0), Vec2f(96, 32))),
  //    Quad(
  //      Leaf(Vec2f(69, 50), List("D", "D2")),
  //      Region(Vec2f(64, 32), Vec2f(96, 64))
  //    ),
  //    Quad(
  //      Leaf(Vec2f(15, 70), List("B")),
  //      Region(Vec2f(0, 64), Vec2f(64, 128))
  //    ),
  //    Quad(node2, Region.square(64, 64, 64)),
  //    Quad(node3, Region.square(64, 64, 32)),
  //    Quad(
  //      Leaf(Vec2f(65, 80), List("E")),
  //      Region(Vec2f(64, 80), Vec2f(80, 96))
  //    ),
  //    Quad(Leaf(Vec2f(80, 90), List("F")), Region(Vec2f(80, 80), Vec2f(96, 96)))
  //  )

  //  sut.visit(exampleQuadTree) shouldEqual expected
  // }

  // "visitAfter" should "be ok" in {
  //  val expected = List[Quad[String, Any]](
  //    Quad(Leaf(Vec2f(40, 45), List("A")), Region(Vec2f(0, 0), Vec2f(64, 64))),
  //    Quad(Leaf(Vec2f(70, 10), List("C")), Region(Vec2f(64, 0), Vec2f(96, 32))),
  //    Quad(
  //      Leaf(Vec2f(69, 50), List("D", "D2")),
  //      Region(Vec2f(64, 32), Vec2f(96, 64))
  //    ),
  //    Quad(node1, Region.square(64, 0, 64)),
  //    Quad(
  //      Leaf(Vec2f(15, 70), List("B")),
  //      Region(Vec2f(0, 64), Vec2f(64, 128))
  //    ),
  //    Quad(
  //      Leaf(Vec2f(65, 80), List("E")),
  //      Region(Vec2f(64, 80), Vec2f(80, 96))
  //    ),
  //    Quad(
  //      Leaf(Vec2f(80, 90), List("F")),
  //      Region(Vec2f(80, 80), Vec2f(96, 96))
  //    ),
  //    Quad(node3, Region.square(64, 64, 32)),
  //    Quad(node2, Region.square(64, 64, 64)),
  //    Quad(node0, Region.square(0, 0, 128))
  //  )

  //  sut.visitAfter(exampleQuadTree) shouldEqual expected
  // }
}
