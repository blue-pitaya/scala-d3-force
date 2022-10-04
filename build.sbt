lazy val commonSettings = Seq(
  scalaVersion := "2.13.8",
  organization := "xyz.bluepitaya",
  name := "scala-d3-force",
  version := "1.0",
  libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.13" % Test,
  libraryDependencies += "xyz.bluepitaya" %% "common-utils" % "1.0",
  scalacOptions ++= Seq(
    "-deprecation",
    "-encoding",
    "UTF-8",
    "-feature",
    "-language:_",
    "-unchecked",
    "-Xfatal-warnings"
  ),
  sourcesInBase := false,

  // publishing
  publishMavenStyle := true,
  Test / publishArtifact := false,
  pomIncludeRepository := (_ ⇒ false),
)

// Debugging is not available in scalajs mode, so i switch to this config when im debugging
//lazy val root = project.in(file("./scalaD3Force")).settings(commonSettings)

lazy val root = (project in file("."))
  .aggregate(scalaD3Force.js, scalaD3Force.jvm)
  .settings(commonSettings)
  .settings(
    publish / skip := true,
  )

lazy val scalaD3Force = crossProject(JSPlatform, JVMPlatform)
  .withoutSuffixFor(JVMPlatform)
  .crossType(CrossType.Pure)
  .settings(commonSettings)
  .jsSettings(
    scalaJSLinkerConfig ~= (_.withModuleKind(ModuleKind.CommonJSModule).withSourceMap(false)),
    scalaJSUseMainModuleInitializer := true,
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
    Compile / fastLinkJS / scalaJSLinkerOutputDirectory := baseDirectory.value / "ui/src/scalajs/target/",
  )
  .enablePlugins(ScalaJSPlugin)
