lazy val publishSettings = Seq(
  organization := "dev.bluepitaya",
  organizationName := "blue.pitaya",
  organizationHomepage := Some(url("https://bluepitaya.dev")),
  scmInfo := Some(ScmInfo(
    url("https://github.com/blue-pitaya/scala-d3-force"),
    "scm:git@github.com:blue-pitaya/scala-d3-force.git"
  )),
  developers := List(Developer(
    id = "blue.pitaya",
    name = "blue.pitaya",
    email = "blue.pitaya@pm.me",
    url = url("https://bluepitaya.dev")
  )),
  licenses := List(License.MIT),
  homepage := Some(url("https://bluepitaya.dev")),
  description := "d3-force logic rewritten to scala",
  // Remove all additional repository other than Maven Central from POM
  pomIncludeRepository := { _ => false },
  publishMavenStyle := true,
  publishTo := {
    val nexus = "https://s01.oss.sonatype.org/"
    if (isSnapshot.value)
      Some("snapshots" at nexus + "content/repositories/snapshots")
    else Some("releases" at nexus + "service/local/staging/deploy/maven2")
  }
)

lazy val baseSettings = Seq(scalaVersion := "2.13.8", version := "0.1")

lazy val commonSettings = baseSettings ++ Seq(
  name := "scala-d3-force",
  libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.13" % Test,
  scalacOptions ++= Seq("-Xlint")
)

// Debugging is not available in scalajs mode, so i switch to this config when im debugging
//lazy val root = project.in(file("./scalaD3Force")).settings(commonSettings)

lazy val root = (project in file("."))
  .aggregate(scalaD3Force.js, scalaD3Force.jvm)
  .settings(commonSettings)
  .settings(publish / skip := true)

lazy val scalaD3Force = crossProject(JSPlatform, JVMPlatform)
  .withoutSuffixFor(JVMPlatform)
  .crossType(CrossType.Pure)
  .settings(commonSettings)
  .settings(publishSettings)
  .jsSettings(
    scalaJSLinkerConfig ~=
      (_.withModuleKind(ModuleKind.CommonJSModule).withSourceMap(false)),
    scalaJSUseMainModuleInitializer := true
  )

import org.scalajs.linker.interface.ESVersion
import org.scalajs.linker.interface.OutputPatterns

lazy val example = (project in file("example"))
  .dependsOn(scalaD3Force.js)
  .settings(
    name := "example",
    scalaVersion := "2.13.8",
    scalaJSLinkerConfig ~= {
      _.withModuleKind(ModuleKind.ESModule)
        .withOutputPatterns(OutputPatterns.fromJSFile("%s.js"))
        .withESFeatures(_.withESVersion(ESVersion.ES2021))
    },
    Compile / fastLinkJS / scalaJSLinkerOutputDirectory :=
      baseDirectory.value / "ui/scalad3force/",
    Compile / fullLinkJS / scalaJSLinkerOutputDirectory :=
      baseDirectory.value / "ui/scalad3force/"
  )
  .enablePlugins(ScalaJSPlugin)
