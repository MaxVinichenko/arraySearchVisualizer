import React from "react";
import "./Node.css";

export default function Node({ node, onClick }) {
  const isVisited = node.isVisited ? "visitedNode" : "";
  const isGrey = node.isGrey ? "greyNode" : "";
  const isEnd = node.isLast ? "endNode" : "";
  const value = node.value;
  const isFound = node.isFound ? "foundNode" : "";

  if (node.isFound == false && node.isLast == true){
    isFound="redNode";
  }

  return (
    <div onClick={()=>onClick(node)} className={`node ${isVisited} ${isGrey} ${isEnd} ${isFound}`}>
      {value}
    </div>
  );
}