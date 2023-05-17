import React, { useState, useRef, useEffect } from "react";
import "./AlgorithmVisualizer.css";
import Node from "./Node/Node.jsx";


export default function AlgorithmVisualizer() {
    
  //number of elements to sort through (userInput)
  const nElements =useRef();
  const [nodes, setNodes] = useState([]);

  //creates nodes based of nElements
  const handleSetNodes =  () => {
    let count = nElements.current.value;
    let newNodes = [];

    let index=0;

    while (count > 0){
      newNodes.push({index:index, isVisited:false})
      count-=1;
      index+=1;
    }
    setNodes([...newNodes]);

    console.log(nodes)
  }

  //Mounting the grid on start 
  useEffect(()=>{
    handleSetNodes();
  }, [])


  function handleVisualizeBinarySearch () {




  }



  return (
    <>
    <input type='number' ref={nElements} defaultValue={15} onChange={handleSetNodes}></input>
    <button onClick={handleVisualizeBinarySearch}>Visualize BinarySearch</button>

    <div className="container">
        {nodes.map((node) => {
            return (<Node node={node}></Node>);
        })}
    </div>
    </>
  );

}
