
import { Fragment } from "react";

import '../static/about.css';


const About = () => (
  <Fragment>

    <div class='top-box' >
        <div class='large-text-centered' >
            <h1 class='large-header' >Filtering Twitch chat made easy.</h1>
        </div>

        <div class='medium-text-centered' >
            <p class='medium-p' >Filtering Twitch chat real time. No sign up or twitch account needed to use this platform.</p>
        </div>
    </div>

    <div id='mainContent'>

        <div class='details-element'>
            <a class='details-link' href='/'>
                <h3>Creating this project </h3>
                <p class='detail-p'>Who made this website and why.</p>
            </a>
        </div> 

    <hr />
    
        <div class='details-element'>
            <a class='details-link' href='/help'>
                <h3>Need some help? </h3>
                <p class='detail-p'>A guide to operating this website.</p>
            </a>
        </div>
        
    <hr />

        <div class='details-element'>
            <a class='details-link' href='/contact'>
                <h3>Contact the developer </h3>
                <p class='detail-p'>Report a bug or make a suggestion.</p>
            </a>
        </div>

    </div>

  </Fragment>
  );


export default About;
