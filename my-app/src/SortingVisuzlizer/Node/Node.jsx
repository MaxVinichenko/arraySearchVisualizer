import "./Node.css";
import React from "react";

export default function Node({ node }) {
  const height = node.value;
  const isHighlited = node.isHighlited ? "highlitedNode" : "";
  const isInplace = node.isInplace ? "inplaceNode" : "";
  const isSwapped = node.isSwapped ? "swappedNode" : "";

  return (
    <div
      className={`sortNode ${isHighlited} ${isInplace} ${isSwapped}`}
      style={{ height: `${height}px` }}
    ></div>
  );
}
