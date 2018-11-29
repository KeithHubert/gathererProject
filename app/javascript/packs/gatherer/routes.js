import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import LandingPage from './components/landingPage';
import Dashboard from './containers/dashboard';


const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>
)
export default App;