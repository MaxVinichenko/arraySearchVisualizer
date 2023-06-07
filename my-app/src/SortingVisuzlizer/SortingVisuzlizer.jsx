import React, { useEffect } from "react";
import { useState } from "react";
import Node from "./Node/Node";
import "./SortingVisuzlizer.css";
import insertionSort from "../Sorting Algorithms/insertionSort";

export default function SortingVisuzlizer() {
  const [nodes, updateNodes] = useState([]);

  useEffect(() => {
    handleGenerateNewArray();
  }, []);


  //creating nodes
  function handleGenerateNewArray() {
    let newNodes = [];

    for (let i = 0; i < 99; i++) {
      let randomNumber = Math.floor(Math.random() * (900 - 45 + 1)) + 90;
      newNodes.push({
        value: randomNumber,
        index: i,
        isHighlited: false,
        isSwapped: false,
        isInplace: false,
      });
    }
    updateNodes([...newNodes]);
  }
  
  
  const wait = (timeToDelay) =>new Promise((resolve) => setTimeout(resolve, timeToDelay));
  
  function handleVisualizeInsertion() {
    const visualize = async () => {
      let swappedI = insertionSort(nodes);
      let animationNodes = [...nodes];
      let previous = null;

      for (let i=0; i<swappedI.length; i++){
        //swappedI is an array of arrays of either 2 or one elements 
        //2 elements means swap the two, 1 means highlit the current node
        if (swappedI[i].length===1){
          //logic for highliting 
            if (previous!=null){
              for (let i=0; i<animationNodes.length; i++){
                animationNodes[i].isHighlited=false;
              }
              updateNodes([...animationNodes]);
            }
            previous = swappedI[i][0];
            animationNodes[previous].isHighlited=true;
            //logic for setting inPlace = true 
            if (previous>0){
              for (let j=0; j<previous; j++){
                animationNodes[j].isInplace=true;
              }
            }
            updateNodes([...animationNodes]);
          continue
        }
        //logic for swapping 
        else{
          let firstI = swappedI[i][0];
          let secondI = swappedI[i][1];
          animationNodes[firstI].isSwapped=true;
          animationNodes[secondI].isSwapped=true;
          await wait(20);
          animationNodes[firstI].isSwapped=false;
          animationNodes[secondI].isSwapped=false;
          [animationNodes[firstI], animationNodes[secondI]] = [animationNodes[secondI],animationNodes[firstI]]
          updateNodes([...animationNodes]);
        }
      }
      //no highlited elements at the end 
      for (let i=0; i<animationNodes.length; i++){
        animationNodes[i].isHighlited=false;
      }
    };
    visualize();
  }
  

  return (
    <div className="container vertical">
      <div className="container">
        <button onClick={handleGenerateNewArray}>New Radom Array</button>
        <button onClick={handleVisualizeInsertion}>Insertion Sort</button>
      </div>
      <div className="container">
        {nodes.map((node, index) => {
          return <Node key={index} node={node}></Node>;
        })}
      </div>
    </div>
  );
}
