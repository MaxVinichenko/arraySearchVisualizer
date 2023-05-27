import React from "react";
import "./Node.css"

export default function Node({node}) {
    const isVisited = node.isVisited ? "visitedNode" : "";
    const isGrey = node.isGrey ? "greyNode" : "";
    const isLast = node.isLast ? "lastNode" : "";
    const value = node.value;

    return (
    <div 
    className={`node ${isVisited} ${isGrey} ${isLast}`}
    >{value}</div>  
    );
}
