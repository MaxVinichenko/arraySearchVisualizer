import React, { useEffect } from "react";
import { useState } from "react";
import Node from "./Node/Node";
import "./SortingVisuzlizer.css"
import insertionSort from "../Sorting Algorithms/insertionSort";

export default function SortingVisuzlizer() {
  const [nodes, updateNodes] = useState([]);

  useEffect(() =>{
    handleGenerateNewArray();
  },[]);

  useEffect(()=>{
    mountNodes();
  },[nodes])

  //creating nodes
  function handleGenerateNewArray() {
    let newNodes = [];

    for (let i=0; i<99; i++){
      let randomNumber = Math.floor(Math.random() * (900 - 45 + 1)) + 90;
      newNodes.push({value:randomNumber, index:i});
    }
    updateNodes([...newNodes]);
  }

  //Mounting Nodes
  function mountNodes (){
    
  }

  function handleVisualizeInsertion(){
    const newNodes=insertionSort(nodes);
    updateNodes([...newNodes]);
  }

  return (
    <div className="container vertical">
      <div className="container">
        <button onClick={handleGenerateNewArray}>New Radom Array</button>
        <button onClick={handleVisualizeInsertion}>Insertion Sort</button>
      </div>
      <div className="container">
        {nodes.map((node)=>{
          return(<Node key={node.index} node={node}></Node>)
        }
        )}
      </div>
    </div>
  );
}
