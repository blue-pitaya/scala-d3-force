# d3-force library rewritten to scala

This module implements simulation of physical forces on particles just like in d3-force library. This lib only implenets numerical operations, so no HTML rendering is included. Also there might be some small changes/extensions in comparison to original lib, but overall functionality should be the same.

[d3-force](https://github.com/d3/d3-force)

Work in progress!

## Todo

- Collision
- Radial force
- Link force id and iterations methods

# To run example

```
cd example/ui
yarn
yarn dev
```

If you want to see result of changes of source code, you must rebuild example package. In root dir:

```
sbt
project example
fastLinkJS
```
