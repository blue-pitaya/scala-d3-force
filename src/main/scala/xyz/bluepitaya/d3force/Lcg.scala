package xyz.bluepitaya.d3force

// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
// d3 uses it as random
object Lcg {
  private val a = 1664525;
  private val c = 1013904223;
  private val m = Int.MaxValue;

  var s = 1;

  def next: Double = {
    s = (a * s + c) % m;
    s.toDouble / m
  }

  def jiggle = (next - 0.5) * 1e-6
}
