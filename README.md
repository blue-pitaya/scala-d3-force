# d3-force library rewritten to scala

This module implements simulation of physical forces on particles just like in d3-force library. This lib only implenets numerical operations, so no HTML rendering is included. Also there might be some small changes/extensions in comparison to original lib, but overall functionality should be the same.

[d3-force](https://github.com/d3/d3-force)

Work in progress, but many things have been already implemented.

## Instalation

For scala 2.13

```scala
libraryDependencies += "dev.bluepitaya" %% "scala-d3-force" % "0.1"
```

For scala.js

```scala
libraryDependencies += "dev.bluepitaya" %%% "scala-d3-force" % "0.1"
```

## Todo

- Collision
- Radial force
- Link force id and iterations methods

# To run example

```
sbt "project example" "clean" "fullLinkJS"
cd example/ui
yarn
yarn dev
```
