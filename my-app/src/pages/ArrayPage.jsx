import "./ArrayPage.css";
import React, { useState, useRef, useEffect } from "react";
import AlgorithmVisualizer from "../Array_search_visualizer/AlgorithmVisualizer";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";

export default function ArrayPage() {
  return (
    <>
      <Navbar />
      <Header />
      <AlgorithmVisualizer />
    </>
  );
}
