import * as d3 from "d3";
import { getData, mySimulation } from "./scalad3force/main.js";
import "./style.css";

//random data
const data = getData();
const nodes = data.nodes.map((n) => ({
  id: n.id,
  x: n.position.x,
  y: n.position.y,
  fx: n.id == 0 ? 0 : undefined,
  fy: n.id == 0 ? 0 : undefined,
}));
const links = data.links.map((x) => ({ source: x.source, target: x.target }));

const width = 1800;
const height = 1800;

//js d3 force example
const svg = d3
  .select("#jsd3graph")
  .append("svg")
  .attr("viewBox", [-width / 2, -height / 2, width, height]);

let link = svg
  .append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("stroke", "grey");

let node = svg
  .append("g")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("r", 5);

function ticked() {
  node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);
}

d3.forceSimulation(nodes)
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
  .tick(300)
  .on("tick", ticked);

//scala d3 example
const myNodes = mySimulation();
console.log(myNodes);
const myLinks = data.links;
const dataLinks = myLinks.map((l) => {
  const source = myNodes.find((n) => n.id == l.source);
  const target = myNodes.find((n) => n.id == l.target);
  return { ...l, source, target };
});

const svg2 = d3
  .select("#scalad3graph")
  .append("svg")
  .attr("viewBox", [-width / 2, -height / 2, width, height]);

svg2
  .append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(dataLinks)
  .join("line")
  .attr("stroke", "grey")
  .attr("x1", (d) => d.source.position.x)
  .attr("y1", (d) => d.source.position.y)
  .attr("x2", (d) => d.target.position.x)
  .attr("y2", (d) => d.target.position.y);

svg2
  .append("g")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(myNodes)
  .join("circle")
  .attr("r", 5)
  .attr("cx", (d) => d.position.x)
  .attr("cy", (d) => d.position.y);
