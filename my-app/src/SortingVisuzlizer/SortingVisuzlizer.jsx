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
      let [newNodes, animationNodes] = insertionSort([...nodes]);
      let oldNodes = [...nodes];

      

      for (let i = 0; i < animationNodes.length; i++) {
        
        await wait(1);
        // if (animationNodes[i][0]=="highlited"){
        //   let firstI = animationNodes[i][1].index
        //   oldNodes[firstI].isHighlited=true;
        //   updateNodes([...oldNodes]);
        // }

        if (animationNodes[i][0] == "swapped") {
          oldNodes[animationNodes[i][1].index] = animationNodes[i][1];
          oldNodes[animationNodes[i][1].index].isSwapped = true;

          oldNodes[animationNodes[i][2].index] = animationNodes[i][2];
          oldNodes[animationNodes[i][2].index].isSwapped = true;

          updateNodes([...oldNodes]);
        }
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
