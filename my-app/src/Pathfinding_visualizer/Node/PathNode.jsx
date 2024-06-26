import React from "react";
import "./PathNode.css";

export default function PathNode({ node, onClick }) {
  const isStart = node.isStart ? "startPath" : "";
  const isEnd = node.isEnd ? "endPath" : "";
  const animate = node.animate ? "animate" : "";
  const animateNeighbor = node.animateNeighbor ? "animateNeighbor" : "";
  const pathBack = node.pathBack ? "pathBack" : "";

  return (
    <div onClick={()=>onClick(node)} className={`PathNode ${isStart} ${isEnd} ${animate} ${animateNeighbor} ${pathBack}`}>
    </div>
  );
}