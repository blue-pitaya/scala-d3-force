package xyz.bluepitaya

import xyz.bluepitaya.common.Vec2f

package object d3force {
  implicit class Vec2fExtensions(v: Vec2f) {
    def jiggleIfZero = v.changeIfZero(Lcg.jiggle)
    def smallValueIfZero = v.changeIfZero(1e-6)
  }
}
