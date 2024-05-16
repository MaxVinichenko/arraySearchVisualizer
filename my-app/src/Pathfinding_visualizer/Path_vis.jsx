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
    <>
      <div className="container">
        <button onClick={handleSetGrid}>Visualize Dijkstra's</button>
        <button onClick={handleSetGrid}>Reset</button>
      </div>
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
      <div className="container">
        <font size="5">
          <p> <b><u>Instructions:</u></b><br/> 
            1: Click on any node to select it as the starting node. <br/> 
            2: Click on another node to select it as the end node. <br/>
            3: Click the button of the algorithm you want to visualize. <br/>
          </p>
        </font>
        
      </div>
    </>
  );


}

