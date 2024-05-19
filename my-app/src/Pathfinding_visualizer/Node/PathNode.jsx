import React from "react";
import "./PathNode.css";

export default function PathNode({ node, onClick }) {
  const isStart = node.isStart ? "startPath" : "";
  const isEnd = node.isEnd ? "endPath" : "";
  const animate = node.animate ? "animate" : "";
  const animateNeighbor = node.animateNeighbor ? "animateNeighbor" : "";

  return (
    <div onClick={()=>onClick(node)} className={`PathNode ${isStart} ${isEnd} ${animate} ${animateNeighbor}`}>
    </div>
  );
}