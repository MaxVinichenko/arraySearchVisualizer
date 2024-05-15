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

    for(let i1=0; i1<xlen; i1++){
      let col=[];
      for(let i2=0; i2<ylen; i2++){
        col.push({
          x: i1,
          y: i2,
          isVisited: false,
          distance: xlen*ylen
        });
      }
      newGrid.push(col);
    }
    setGrid([...newGrid]);
  }

  return (
    <div className="container">
      

      {
        grid.map((col) => {
          return (
            <div className="column">{ 
              col.map((node, index) => {
                return (
                  <Node node={node} key={index} />
                );
              })
             }</div>
          );
        })
      }



    </div>
  );


}

