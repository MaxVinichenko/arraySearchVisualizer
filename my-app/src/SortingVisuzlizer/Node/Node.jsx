import "./Node.css"
import React from "react";

export default function Node ({node}){
    const height = node.value;

    return (
        <div className="sortNode" style={{height: `${height}px`}}></div>
    );
}
