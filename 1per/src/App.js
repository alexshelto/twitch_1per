
import { Fragment } from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

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

    </main>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

const About = () => (
  <Fragment>
    <h1>About</h1>
  </Fragment>
  );

const Create = () => (
  <Fragment>
    <h1>Create</h1>
  </Fragment>
  );


export default App;
