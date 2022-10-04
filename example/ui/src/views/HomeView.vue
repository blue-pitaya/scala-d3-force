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
  fx: n.id == 0 ? 0 : undefined,
  fy: n.id == 0 ? 0 : undefined,
}));
const links = data.links.map((x) => ({ source: x.source, target: x.target }));

//console.log(data.nodes);

const d3Nodes = ref([]);
const d3Links = ref([]);
const text = ref(0);
const myNodes = ref(mySimulation());
const myLinks = ref(data.links);

const simulation = d3
  .forceSimulation(nodes)
  .velocityDecay(0.1)
  .force(
    "link",
    d3
      .forceLink(links)
      .id((d) => d.id)
      .distance(80)
  )
  .force("charge", d3.forceManyBody().theta(0.99).strength(-1000))
  .force("x", d3.forceX().strength(0.1))
  .force("y", d3.forceY().strength(0.1))
  .stop()
  .tick(300)
  .on("tick", () => {
    const _nodes = simulation.nodes();
    d3Nodes.value = _nodes;
    d3Links.value = links;
    text.value = text.value + 1;
  });
console.log("done");

const dataLinks = myLinks.value.map((l) => {
  //console.log(l);
  const source = myNodes.value.find((n) => n.id == l.source);
  const target = myNodes.value.find((n) => n.id == l.target);
  return { ...l, noteFrom: source, noteTo: target };
});
</script>

<template>
  <div class="home">
    {{ text }}<br />
    <svg id="svg1" ref="svgCont1" viewBox="-900 -900 1800 1800">
      <circle r="10" :cx="0" :cy="0" fill="transparent" stroke="red" />
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
    <svg id="svg2" ref="svgCont2" viewBox="-900 -900 1800 1800">
      <circle r="10" :cx="0" :cy="0" fill="transparent" stroke="red" />
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
  width: 800px;
  height: 800px;
  margin: 15px;
  border: 1px solid black;
}
</style>
