import React, { useState, useRef, useEffect } from "react";
import PathNode from "./Node/PathNode.jsx"
import DijkstrasAlgorithm from "../Pathfinding_algorithms/dijaxtras.js";
import DepthFirstSearch from "../Pathfinding_algorithms/depthFirstSearch.js";
import BreadthFirstSearch from "../Pathfinding_algorithms/breadthFirstSearch.js";
import Queue from 'std-queue';
import Modal from "../Components/modal/Modal.jsx";

export default function PathgingVisualizer(){

  const [grid, setGrid] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  let nodesSelectedRef=useRef(0);
  let startNodeRef=useRef(null);
  let endNodeRef=useRef(null);
  let xlen = useRef(10);
  let ylen = useRef(10);

  //Mounting grid
  useEffect(() => {
    handleSetGrid();
  }, []);

    //Create grid
  function handleSetGrid(){
    let newGrid =[];
    nodesSelectedRef.current=0;
    startNodeRef.current=null;
    endNodeRef.current=null;

    // The gird will be a 2D array of objects x is i1 and y is i2
    // so it'll be [x][y] starting at [0][0]

    for(let i1=0; i1<xlen.current; i1++){
      let col=[];
      for(let i2=0; i2<ylen.current; i2++){
        col.push({
          //these values are then passed to Node as props 
          //---------------------------------------------
          x: i1,
          y: i2,
          isVisited: false,
          isStart: false,
          isEnd: false,
          distance: xlen.current*ylen.current,
          animate: false
          //---------------------------------------------
        });
      }
      newGrid.push(col);
    }
    setGrid([...newGrid]);
  }
  
  function handleClickedNode(node){
    if (nodesSelectedRef.current==0){
      node.isStart=true;
      startNodeRef.current=node;
    }else if (nodesSelectedRef.current==1){
      node.isEnd=true;
      endNodeRef.current=node;
    }
    nodesSelectedRef.current++;
    let newGrid = grid.slice();
    newGrid[node.x][node.y]=node;
    setGrid([...newGrid ]);
    // if selected more than 2, could add a pop up asking to reset the grid
  }

  //Pulls path and visited nodses from
  function handleVisualizeDijkstras(){
    const info=DijkstrasAlgorithm(grid, startNodeRef, endNodeRef);


  }

  function handleVisualizeDepthFirstSearch(){
    
    const info=DepthFirstSearch(grid, startNodeRef, endNodeRef);
  }

  function handleVisualizeBreadthFirstSearch(){
    if (startNodeRef.current==null || endNodeRef.current==null){
      setModalStatus(true);
      return null;
    }
    let newGrid=grid.slice();

    const animationNodes=BreadthFirstSearch(newGrid, startNodeRef, endNodeRef);

    console.log(animationNodes);



    for (let i=0; i<animationNodes.length;i++){

      setTimeout(() => {
        let node=animationNodes.shift()
        node.animate=true;
        newGrid[node.x][node.y]=node;
        setGrid([...newGrid])
      }, i * 50);

    }

  }

  return (
    <>
      <Modal status={modalStatus} setStatus={setModalStatus}/>
      <div className="container">
        <button onClick={handleVisualizeBreadthFirstSearch}>Visualize Breadth First Search</button>
        <button onClick={handleVisualizeDijkstras}>Visualize Dijkstra's</button>
        <button onClick={handleVisualizeDepthFirstSearch}>Visualize Depth First Search</button>
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

