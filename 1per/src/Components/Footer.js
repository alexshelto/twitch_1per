

import React from 'react';

import "../static/footerstyles.css";


function Footer() {
    return ( 
        <div class='footer'>
        <p> this is my footer </p>

        <div class='footer-link-container'>
            <div class='footer-row'> 
                <ul>
                    <li> <a href='/'>Home </a> </li>
                    <li> <a href='/create'>Create Room</a> </li>
                    <li> <a href='/about'>About</a> </li>
                </ul>
            </div>

            <div class='footer-row'> 
                <ul>
                    <li> <a href='/'>Contact </a> </li>
                    <li> <a href='/'>Help </a> </li>
                    <li> <a href='/'>idk </a> </li>
                </ul>
            </div>

        </div>

        </div>
    );
}

export default Footer;
