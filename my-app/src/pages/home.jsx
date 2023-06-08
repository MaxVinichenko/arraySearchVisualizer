import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function navigateArrayVis (){
    navigate("/arrayVisualizer");
  }

  function navigateSortingVis (){
    navigate("/sortingVisualizer");
  }

  function navigatePathVis (){
    navigate("/pathfindingVisualizer")
  }

  return (
    <div className="home container">
        

        <div onClick={navigateArrayVis} className="box arrayVisualizer">

        </div>

        
        <div onClick={navigateSortingVis} className="box sortingVisualizer">

        </div>
        <div onClick={navigatePathVis} className="box pathfindingVisualizer">

        </div>
    
    </div>
  )
}





