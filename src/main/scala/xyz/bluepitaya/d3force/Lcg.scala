package xyz.bluepitaya.d3force

// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
// d3 uses it as random
object Lcg {
  private val a = 1664525L;
  private val c = 1013904223L;
  private val m = 4294967296L;

  var s = 1L;

  def next: Double = {
    s = (a * s + c) % m;
    val x = s.toDouble / m
    x
  }

  def jiggle = (next - 0.5) * 1e-6

  // TODO: !!!
  def reset = (s = 1L)
}
