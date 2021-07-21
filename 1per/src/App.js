
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Create from "./Pages/Create";
import View from "./Pages/View";
//<Route path="/view" component={View} />
//<Route path="/view" render={(props) => <View {...props}/>}/>

import './App.css';

function App() {
  return (
    <Router>
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
    <Route path="/" exact component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/create"  component={Create} />
    <Route path="/view" component={View} />

    </main>
    </Router>
  );
}




export default App;
