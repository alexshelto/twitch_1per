

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Create from "./Pages/Create";
import View from "./Pages/View";

import Header from "./Components/Header";
//import Footer from "./Components/Footer";

import './App.css';


function App() {
    return (
        <div class='App'>
        <Router>
            <div id="skip">
                <a class='skip-to-content' href="#mainContent">Skip to main content</a>
            </div>

            <Header />

            <main>
                <div id='container'>
                  <Route path="/" exact component={Home} />
                  <Route path="/about"  component={About} />
                  <Route path="/create"  component={Create} />
                  <Route path="/view" component={View} />
                </div>
            </main>
         </Router>
        </div>
    );

}
export default App;

// Note: Removed footer from APp
// <Footer />
