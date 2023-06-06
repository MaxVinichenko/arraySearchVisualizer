import React, { useState, useRef, useEffect } from "react";
import binarySearch from "../Array Search Algorithms/binarySearch";
import linearSearch from "../Array Search Algorithms/linearSearch";
import "./AlgorithmVisualizer.css";
import Node from "./Node/Node.jsx";

export default function AlgorithmVisualizer() {
  //number of elements to sort through (userInput)
  const nElements =useRef();
  const increment =useRef();
  const targetVal =useRef();
  const [nodes, setNodes] = useState([]);

  //Mounting nodes 
  useEffect(()=>{
    handleSetNodes();
  }, [])

  //Create nodes
  function handleSetNodes() {
    let count = nElements.current.value;
    let newNodes = [];
    let index=0;
    let value=0;

    while (count > 0){
      newNodes.push({
        index:index,
        isVisited:false,
        isGrey:false,
        value:value, 
        isLast:false,
        isFound: false
      })
      count-=1;
      index+=1;
      value+=parseInt(increment.current.value);
    }
    setNodes([...newNodes]);
  }

  function handleVisualizeBinarySearch () {
    handleSetNodes();

    let [visitedNodes, greyNodes] = binarySearch(nodes, targetVal.current.value);
    let updatedNodes = nodes;
    
    visitedNodes.forEach((visitedIndex, index) =>{
      if (nodes[visitedIndex]){
          setTimeout(() => {
            updatedNodes[visitedIndex].isVisited=true;
            setNodes([...updatedNodes]);
          }, index*800)
          
      }
    })

    greyNodes.forEach((greyArray, i) => {
      setTimeout (()=>{      
        greyArray.forEach((greyIndex, index) =>{
        if (nodes[greyIndex].isVisited==false){
            updatedNodes[greyIndex].isGrey = true;
            setNodes([...updatedNodes]);
        }
        })
      }, i*800);
    })
  }

  function handleReset (){
    nElements.current.value=15;
    increment.current.value=1;
    handleSetNodes();
  }

  async function handleVisualizeLinearSearch () {
    const target = targetVal.current.value
    const [visitedNodes, greyNodes] = linearSearch(nodes,target);
    let updatedNodes = nodes;

    for (const visNode of visitedNodes){
      await new Promise((resolve)=> setTimeout(resolve,400));
      updatedNodes[visNode].isVisited=true;
      setNodes([...updatedNodes]);
    }

    greyNodes.forEach((greyNode, index)=>{
      updatedNodes[greyNode].isGrey=true;
      setNodes([...updatedNodes]);
    })

  }


  return (
    <>
    <label htmlFor="inputField">Number Of Array Elements: </label>
    <input type='number' ref={nElements} defaultValue={15} onChange={handleSetNodes}></input>
    <br/>
    <label htmlFor="inputField">Increment Array Values By: </label>
    <input type="number" ref={increment} defaultValue={1} onChange={handleSetNodes}></input>
    <br />
    <label htmlFor="inputField">Target Value: </label>
    <input type="number" ref={targetVal}  defaultValue={-1}/>
    <br />
    <div className="container">
      <button onClick={handleVisualizeBinarySearch}>Visualize BinarySearch</button>
      <button onClick={handleVisualizeLinearSearch}>Visualize Linear Search</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    
    <div className="container">
        {nodes.map((node) => {
            return (<Node key={node.index} node={node}></Node>);
        })}
    </div>
    </>
  );
}
