import React, { useState, useRef, useEffect } from "react";
import Node from "./Node/Node.jsx"

export default function PathgingVisualizer(){

  const [grid, setGrid] = useState([]);

  //Mounting grid
  useEffect(() => {
    handleSetGrid();
  }, []);

    //Create grid
  function handleSetGrid(){
    let xlen = 10;
    let ylen = 10;
    let newGrid =[];

    // The gird will be a 2D array of objects x is i1 and y is i2
    // so it'll be [x][y] starting at [0][0]
    let i1=0
    let i2=0
    while(xlen>i1){
      while(ylen>i2){
        newGrid.push({
          x: i1,
          y: i2,
          isVisited: false,
          distance: xlen*ylen
        });
        i2+=1;
      }
      i1+=1;
    }
    setGrid([...newGrid]);
  }

  return (
    <>
      {
        grid.map((node) => {
          node.map((index) => {
            return (
              <Node node={node} key={index} />
            );
          });
        })
      }

    </>
  );


}

