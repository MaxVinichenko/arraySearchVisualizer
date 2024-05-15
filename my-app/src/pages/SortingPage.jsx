import React from 'react'
import "./SortingPage.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SortingVisuzlizer from '../Sorting_visuzlizer/SortingVisuzlizer'

export default function SortingPage() {
  return (
    <>
        <Navbar/>
        <SortingVisuzlizer/>
    </>
  )
}

