import './ArrayPage.css';
import React, { useState, useRef, useEffect } from "react";
import AlgorithmVisualizer from '../AlgorithmVisualizer/AlgorithmVisualizer';
import Header from '../Components/header';
import Navbar from '../Components/Navbar';

export default function ArrayPage() {
  return (
    <div className="ArrayAlgorithmsPage">
      <Navbar/>
      <Header/>
      <AlgorithmVisualizer/>
    </div>
  );
}


