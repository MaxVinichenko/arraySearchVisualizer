import './App.css';
import React, { useState, useRef, useEffect } from "react";
import AlgorithmVisualizer from './AlgorithmVisualizer/AlgorithmVisualizer';
import Header from './Components/header';

function App() {


  return (
    <div className="App">
      <Header/>
      <AlgorithmVisualizer></AlgorithmVisualizer>
    </div>
  );
}

export default App;
