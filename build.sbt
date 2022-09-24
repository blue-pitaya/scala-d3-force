ThisBuild / scalaVersion     := "2.13.8"
ThisBuild / version          := "0.1.0-SNAPSHOT"
ThisBuild / organization     := "xyz.bluepitaya"
ThisBuild / organizationName := "bluepitaya"

lazy val root = (project in file("."))
  .settings(
    name := "scala-d3-force",
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.13" % Test,
  )
