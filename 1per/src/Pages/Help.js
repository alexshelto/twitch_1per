
import { Fragment } from "react";

import '../static/about.css';


const Help = () => (
  <Fragment>


    <div class='center-container'>
    <div id='mainContent'>
        

        <div class='top-box' >
            <h1> Need help? </h1>
        </div>

        <hr />

        <div class='details-element'>
                <h2>Overview </h2>
                <p class='detail-p'>Twitch Filter allows you to quickly filter your chat searching for specifix messages with a prefix </p>
                <p class='detail-p'>What is a prefix? It is a starting word or command. An example could be starting a morning stream and setting your prefix to 'goodmorning', this would only show messages from users who start their message off with a goodmorning. </p>
        </div> 

    <hr />

        <div class='details-element'>
                <h2>Why would this be useful?</h2>
                <p class='detail-p'>Chat can move quickly, with Twitch Filter you can start discussions based on certain topics or prefixes and be able to read those messages only.</p>
                <p class='detail-p'>Another nice thing about Twitch Filter is it will only display 1 message per twitch account, this way you dont have any spammers taking up the message forum allowing as many users as you decide to voice their thoughts or ask their questions. </p>
        </div> 

    <hr />
    
        <div class='details-element'>
                <h2>Getting started</h2>
                <p class='detail-p'>To use this tool simply head over to the Create Room link in the navigation bar or home page</p>
                <p class='detail-p'>Once there, enter your twitch channel name in the channel name box, this will be the channel where chat messages are being pulled from</p>
                <p class='detail-p'>Next you will enter your own custom prefix into the prefix box. This will be the required word or phrase in the beginning of someones chat message for their message to appear on your browser</p>
                <p class='detail-p'>Lastly head down to the message limit box, here you will enter the limit of messages to pull. You will also have the functionality to stop submissions whenever you choose. We recommend not exceeding a couple hundred messages and instead repeating multiple times if you want that many messages. </p>
                <p class='detail-p'>Once you have filled out this form, simply hit submit and you will be redirected to a page to view your incomming filtered chat messaged! It's that easy. </p>
        </div>
        
    <hr />


        </div>
    </div>

  </Fragment>
  );


export default Help;
