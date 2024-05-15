import React, { useState, useRef, useEffect } from "react";


export default function PathgingVisualizer(){
//Mounting nodes
  useEffect(() => {
    handleSetGrid();
  }, []);

    //Create nodes
  function handleSetGrid(){
    let xlen = 10;
    let ylen = 10;
    let newGrid =[];

    // The gird will be a 2D array of objects x is i1 and y is i2
    // so it'll be [x][y] starting at [0][0]
    i1=0
    i2=0
    while(xlen>i1){
      while(height>0){
        newGrid.push({
          x: i1,
          y: i2,
          isVisited: false,
          distance: xlen*ylen;
        });
        }
        i2+=1;
      }
      i1+=1;
    }


  }
}
