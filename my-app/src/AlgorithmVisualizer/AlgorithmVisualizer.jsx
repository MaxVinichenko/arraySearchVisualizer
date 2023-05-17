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

    console.log(count);
    while (count > 0){
      newNodes.push([])
      count-=1
    }
    setNodes([...newNodes]);
  }

  //Mounting the grid on start 
  useEffect(()=>{
    handleSetNodes();
  }, [])


  function handleVisualizeBinarySearch () {




  }



  return (
    <>
    <input type='number' ref={nElements} defaultValue={10} onChange={handleSetNodes}></input>
    <button onClick={handleVisualizeBinarySearch}>Visualize BinarySearch</button>

    <div className="container">
        {nodes.map((node) => {
            return (<Node ></Node>);
        })}
    </div>
    </>
  );

}
