import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarFeatures from "./navbarfeatures.js";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Frames from "./frames/frames";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarFeatures/>
    <Router>
      <Route exact path = "/" component ={Frames}/> 
    </Router>
   
      
    
      </div>
    );
  }
}

export default App;
