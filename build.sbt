lazy val commonSettings = Seq(
  scalaVersion := "2.13.8",
  organization := "xyz.bluepitaya",
  name := "scala-d3-force",
  version := "1.0",
  libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.13" % Test,
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

lazy val root = project.in(file("./scalaD3Force")).settings(commonSettings)

//lazy val root = project.in(file("."))
//  .aggregate(scalaD3Force.js, scalaD3Force.jvm)
//  .settings(commonSettings)
//  .settings(
//    publish / skip := true,
//  )
//
//lazy val scalaD3Force = crossProject(JSPlatform, JVMPlatform)
//  .withoutSuffixFor(JVMPlatform)
//  .crossType(CrossType.Pure)
//  .settings(commonSettings)
//  .jsSettings(
//    scalaJSLinkerConfig ~= (_.withModuleKind(ModuleKind.CommonJSModule).withSourceMap(false)),
//    scalaJSUseMainModuleInitializer := true,
//  )
