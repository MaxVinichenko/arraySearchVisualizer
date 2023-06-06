import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="container navbar">
        <Link className='navLink' to={"/home"}>Home</Link> 


    </div>
  )
}

