<script lang="ts" setup>
/* eslint-disable */
import { getData, mySimulation } from "@/scalajs/target/main";
import * as d3 from "d3-force";
import { computed, ref, watchEffect } from "vue";

const data = getData();
const nodes = data.nodes.map((n) => ({
  id: n.id,
  x: n.position.x,
  y: n.position.y,
}));
const links = data.links.map((x) => ({ source: x.source, target: x.target }));

const d3Nodes = ref([]);
const d3Links = ref([]);
const text = ref(0);
const myNodes = ref(mySimulation());
const myLinks = ref(data.links);

const simulation = d3
  .forceSimulation(nodes)
  .force(
    "link",
    d3
      .forceLink(links)
      .id((d) => d.id)
      .distance(0)
      .strength(0.5)
  )
  .force("charge", d3.forceManyBody().strength(-100))
  .force("center", d3.forceCenter().strength(0.05))
  .force("radial", d3.forceRadial().radius(50))
  .on("tick", () => {
    const _nodes = simulation.nodes();
    d3Nodes.value = _nodes;
    d3Links.value = links;
    text.value = text.value + 1;
  });

const dataLinks = myLinks.value.map((l) => {
  console.log(l);
  const source = myNodes.value.find((n) => n.id == l.source);
  const target = myNodes.value.find((n) => n.id == l.target);
  return { ...l, noteFrom: source, noteTo: target };
});
</script>

<template>
  <div class="home">
    {{ text }}<br />
    <svg id="svg1" ref="svgCont1" viewBox="-300 -300 600 600">
      <circle v-for="n in d3Nodes" :key="n.id" r="2" :cx="n.x" :cy="n.y" />
      <line
        v-for="l in d3Links"
        :x1="l.source.x"
        :y1="l.source.y"
        :x2="l.target.x"
        :y2="l.target.y"
        stroke="gray"
      />
    </svg>
    <svg id="svg2" ref="svgCont2" viewBox="-300 -300 600 600">
      <circle
        v-for="n in myNodes"
        :key="n.id"
        r="2"
        :cx="n.position.x"
        :cy="n.position.y"
      />
      <line
        v-for="l in dataLinks"
        :x1="l.noteFrom?.position?.x || 0"
        :y1="l.noteFrom?.position?.y || 0"
        :x2="l.noteTo?.position?.x || 0"
        :y2="l.noteTo?.position?.y || 0"
        stroke="gray"
      />
    </svg>
  </div>
</template>

<style scoped>
svg {
  width: 600px;
  height: 600px;
  margin: 15px;
  border: 1px solid black;
}
</style>
