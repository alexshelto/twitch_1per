

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

/* import Home from "./Pages/Home"; */
import About from "./Pages/About";
import Create from "./Pages/Create";
import View from "./Pages/View";

import Help from "./Pages/Help";
import Contact from "./Pages/Contact";

import Header from "./Components/Header";
//import Footer from "./Components/Footer";

import './App.css';


function App() {
    return (
        <div className='App'>
        <Router>
            <div id="skip">
                <a class='skip-to-content' href="#mainContent">Skip to main content</a>
            </div>

            <Header />

            <main>
                <div id='container'>
                  <Route path="/" exact component={About} />
                  <Route path="/create"  component={Create} />
                  <Route path="/view" component={View} />
                  <Route path="/help" exact component={Help} />
                  <Route path="/contact" exact component={Contact} />
                </div>
            </main>
         </Router>
        </div>
    );

}
export default App;

/* <Route path="/about"  component={About} /> */
// Note: Removed footer from APp
// <Footer />
