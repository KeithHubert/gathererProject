import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class LandingPage extends React.Component {
  render() {
    return(
      <div class="header">
            <div class="gradient">

      <div class="logo-box">
      </div>
      <div class="text-box">
          <h1 class="heading-primary">
              <span class="heading-primary-main">GATHERER</span>
              <span class="heading-primary-sub">MTG Price Tracking</span>
          </h1>
          <Link to="/dashboard" class="btn btn-white btn-animated">Check Markets</Link>
      </div>
      </div>
  </div>
    )
  }
}
export default LandingPage