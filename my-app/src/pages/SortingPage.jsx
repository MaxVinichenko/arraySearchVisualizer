import React from 'react'
import "./SortingPage.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SortingVisuzlizer from '../SortingVisuzlizer/SortingVisuzlizer'

export default function SortingPage() {
  return (
    <>
        <Navbar/>
        <SortingVisuzlizer/>
    </>
  )
}

