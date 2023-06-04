import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PricingPage from './pages/pricingPage.jsx';
import Home from './pages/home';
//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/pricing",
    element: <PricingPage/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


