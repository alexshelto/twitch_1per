
import React, { useEffect, Fragment } from 'react'

import '../static/about.css';


function About_Me() {

  useEffect(() => {
     document.title = "twitch filer | about dev";  
   });

  return (
    <Fragment>

      <div id='mainContent'>
        <div class='details-element'>
          <h1>
            Hello, my name is Alex and I am the creator of this website. 
          </h1>
        </div>
      
      <hr />

        <div class='details-element'>
          <h2>
            Being a fan of using Twitch, I noticed how hard it can be to have your message seen by a streamer.
            I created this application for streamers to be able to do unique things like questions and answers or focus on specific chat topics while streaming.
          </h2>
        </div>

        <hr />

        <div class='details-element'>
          <h2>
          If you are a fan of my work, you can find my github <a href='http://www.github.com/alexshelto/' alt='My github account'>here</a> and my linkedin <a href='http://www.linkedin.com/in/alexander-shelton-codes/' alt='my linkedin account'>here</a>. 
          I really hope you enjoy this website, feel free to visit the contact page to suggest a feature you would like it to have.
        </h2>
        </div>


      </div>

    </Fragment>
  );
}

export default About_Me;
