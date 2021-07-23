

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Create from "./Pages/Create";
import View from "./Pages/View";

import './App.css';



export class App extends React.Component {
  

  render() {

    return (
      <Router>


        <div id="skip">
            <a href="#mainContent">Skip to main content</a>
        </div>

        <main>
            <nav id='navbar'>
                <div id='navbar-links'>
                <ul>
                    <li> <a href='/'>Home </a> </li>
                    <li> <a href='/create'>Create Room </a> </li>
                    <li> <a href='/about'>About </a> </li>
                </ul>
                </div>
            </nav>
        <div id='container'>
          <Route path="/" exact component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/create"  component={Create} />
          <Route path="/view" component={View} />
       </div>
      </main>
      </Router>
    );


  }

}
export default App;
