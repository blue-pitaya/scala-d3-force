package example

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers
import xyz.bluepitaya.d3force.quadtree._
import xyz.bluepitaya.d3force.Vec2f

class QuadTreeOpsSpec extends AnyFlatSpec with Matchers {
  def sut = QuadTreeOps

  "adding example" should "be ok" in {
    val region = Region(Vec2f(0, 0), Vec2f(127, 127))
    val tree = QuadTree(region, None)
    val points = List(
      (Vec2f(40, 45), "A"),
      (Vec2f(15, 70), "B"),
      (Vec2f(70, 10), "C"),
      (Vec2f(69, 50), "D"),
      (Vec2f(65, 80), "E"),
      (Vec2f(80, 90), "F"),
      (Vec2f(69, 50), "D2")
    )

    val node3 = Node(Map(
      BottomLeft -> Leaf(Vec2f(65, 80), List("E")),
      BottomRight -> Leaf(Vec2f(80, 90), List("F"))
    ))
    val node2 = Node(Map(TopLeft -> node3))
    val node1 = Node(Map(
      TopLeft -> Leaf(Vec2f(70, 10), List("C")),
      BottomLeft -> Leaf(Vec2f(69, 50), List("D", "D2"))
    ))
    val node0 = Node(Map(
      TopLeft -> Leaf(Vec2f(40, 45), List("A")),
      TopRight -> node1,
      BottomLeft -> Leaf(Vec2f(15, 70), List("B")),
      BottomRight -> node2
    ))
    val expected = QuadTree(region, Some(node0))

    val result = points.foldLeft(QuadTree(region, None)) { (tree, p) =>
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

    points.foldLeft(QuadTree(region, None)) { (tree, p) =>
      sut.add(p._1, p._2, tree)
    }
  }
}
