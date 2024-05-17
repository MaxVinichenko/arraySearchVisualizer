import React, { useState, useRef, useEffect } from "react";
import PathNode from "./Node/PathNode.jsx"
import DijkstrasAlgorithm from "../Pathfinding_algorithms/dijaxtras.js";
import DepthFirstSearch from "../Pathfinding_algorithms/depthFirstSearch.js";
import BreadthFirstSearch from "../Pathfinding_algorithms/breadthFirstSearch.js";

export default function PathgingVisualizer(){

  const [grid, setGrid] = useState([]);
  let nodesSelectedRef=useRef(0);
  let startNodeRef=useRef(null);
  let endNodeRef=useRef(null);

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
          //these values are then passed to Node as props 
          x: i1,
          y: i2,
          isVisited: false,
          isStart: false,
          isEnd: false,
          distance: xlen*ylen
        });
      }
      newGrid.push(col);
    }
    setGrid([...newGrid]);
  }
  function handleClickedNode(node){
    if (nodesSelectedRef.current==0){
      node.isStart=true;
      startNodeRef=node;
    }else if (nodesSelectedRef.current==1){
      node.isEnd=true;
      endNodeRef=node;
    }
    nodesSelectedRef.current++;
    let newGrid = grid;
    newGrid[node.x][node.y]=node;
    setGrid([...newGrid ]);
    // if selected more than 2, could add a pop up asking to reset the grid
    console.log(node);
  }

  //Pulls path and visited nodses from
  function handleVisualizeDijkstras(){
    const info=DijkstrasAlgorithm(grid, startNodeRef, endNodeRef);


  }

  function handleVisualizeDepthFirstSearch(){
    const info=DepthFirstSearch(grid, startNodeRef, endNodeRef);
  }

  function handleVisualizeBreadthFirstSearch(){
    const info=BreadthFirstSearch(grid, startNodeRef, endNodeRef);
  }

  return (
    <>
      <div className="container">
        <button onClick={handleVisualizeDijkstras}>Visualize Dijkstra's</button>
        <button onClick={handleVisualizeDepthFirstSearch}>Visualize Depth First Search</button>
        <button onClick={handleVisualizeBreadthFirstSearch}>Visualize Breadth First Search</button>
        <button onClick={handleSetGrid}>Reset</button>
      </div>
      <div className="container">

        {
          grid.map((col, x) => {
            return (
              <div className="column" key={x}>{ 
                col.map((node, y) => {
                  return (
                    <PathNode onClick={() => handleClickedNode(node)} node={node} key={String(x)+String(y)} />
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

