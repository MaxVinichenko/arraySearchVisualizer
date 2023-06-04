import React from "react";
import "./pricingPage.css";
import { Link } from "react-router-dom";

export default function PricingPage () {
    return (
        <div className="pricingPage">
          <p>$$$</p>
          <li><Link to="/">Home</Link></li>
        </div>
    );
};


