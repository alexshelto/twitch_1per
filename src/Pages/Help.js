
import React, { useEffect, Fragment } from 'react'
import '../static/about.css';



function Help() {

  useEffect(() => {
     document.title = "twitch filer | help"; 
   });

  return (
    <Fragment>
      <div class='center-container'>
      <div id='mainContent'>
          

          <div class='top-box' >
              <h1> Need help? </h1>
          </div>

          <hr />

          <div class='help-info'>
                  <h2>Overview </h2>
                  <h3 class='detail-p'>Twitch Filter allows you to quickly filter your chat searching for specifix messages with containing a target word </h3>
          </div> 

      <hr />

          <div class='help-info'>
                  <h2>Why would this be useful?</h2>
                  <p class='detail-p'>Chat can move quickly, with Twitch Filter you can start discussions based on certain topics or words and be able to read those messages only.</p>
                  <p class='detail-p'>Another nice thing about Twitch Filter is it will only display 1 message per twitch account, this way you dont have any spammers taking up the message forum allowing as many users as you decide to voice their thoughts or ask their questions. </p>
          </div> 

      <hr />
      
          <div class='help-info'>
                  <h2>Getting started</h2>
                  <p class='detail-p'>To use this tool simply head over to the Create Room link in the navigation bar or home page</p>
                  <p class='detail-p'>Once there, enter your twitch channel name in the channel name box, this will be the channel where chat messages are being pulled from</p>
                  <p class='detail-p'>Next you will enter your own custom target word or phrase in the box. This will be the required word or phrase in someones chat message for their message to appear on your browser</p>
                  <p class='detail-p'>Lastly head down to the message limit box, here you will enter the limit of messages to pull. You will also have the functionality to stop submissions whenever you choose. We recommend not exceeding a couple hundred messages and instead repeating multiple times if you want that many messages. </p>
                  <p class='detail-p'>Once you have filled out this form, simply hit submit and you will be redirected to a page to view your incomming filtered chat messaged! It's that easy. </p>
          </div>
          
      <hr />


          </div>
      </div>

    </Fragment>
  );

}


export default Help;
