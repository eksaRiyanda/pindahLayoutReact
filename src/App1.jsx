import React from 'react'
import Login from './PindahHalaman/Login'
import About from './PindahHalaman/About'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Register from './PindahHalaman/Register';



export default function App1() {
    return (
        <Router>
          <About/>
            <Switch>
            <Route path="/login">
            <Login/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>
            </Switch>
        </Router>
            
    )
}
