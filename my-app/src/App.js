import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ArrayPage from './pages/ArrayPage';
import PricingPage from './pages/pricingPage.jsx';
import Home from './pages/home';
import SortingPage from './pages/SortingPage';
import PathfindingPage from './pages/PathfindingPage';

export default function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arrayVisualizer" element={<ArrayPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sortingVisualizer" element={<SortingPage/>} />
          <Route path='/pathfindingVisualizer' element={<PathfindingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}



