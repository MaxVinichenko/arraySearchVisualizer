import React from "react";
import "./Node.css"

export default function Node({node}) {
    const extraClassName = node.isVisited ? "visitedNode" : "";

    return (

    <div 
    className={`node ${extraClassName}` }

    ></div>  
    );
}
