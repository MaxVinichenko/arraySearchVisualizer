import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleArrayVis (){
    navigate("/arrayVisualizer");
  }

  function handleSortingVis (){
    navigate("/sortingVisualizer");
  }

  return (
    <div className="home container">
        

        <div onClick={handleArrayVis} className="box arrayVisualizer">

        </div>

        
        <div onClick={handleSortingVis} className="box sortingVisualizer">

        </div>
        <div className="box pathfindingVisualizer">

        </div>
    
    </div>
  )
}





