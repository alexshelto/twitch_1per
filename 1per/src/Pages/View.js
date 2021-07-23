
import React, { Fragment } from 'react';
import Message from '../Components/Message';

import tmi from 'tmi.js';



export class View extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channel: props.location.state.channel, 
            prefix: props.location.state.prefix,
            messageCount: 0,
            messageLimit: props.location.state.limit,
            usernameHistory: new Set(),
            messages: [],
            client: new tmi.Client({
                channels: [`#${props.location.state.channel}`]
                })
        };

        this.state.client.connect();
        this.handleStop = this.handleStop.bind(this);
    }


    componentDidMount() { 

        if(this.state.messageCount < this.state.messageLimit) {

            this.state.client.on('message', (channel, userstate, message, self) => {

                if(this.state.messageCount >= this.state.messageLimit) {
                    console.log("hit limit we gone");
                    this.state.client.disconnect();
                    this.setState({client: null});
                    return;
                }

                const content = {
                    username: userstate['display-name'],
                    message: message,
                    color: userstate['color']
                }

                if(message.toLowerCase().startsWith(this.state.prefix) && !this.state.usernameHistory.has(content.username) ) {
                    // Need to update the messages state

                    this.setState(prevState => ({
                        messages: [...prevState.messages, {username: content.username, message: content.message}],
                        messageCount: prevState.messageCount + 1,
                        usernameHistory: new Set(prevState.usernameHistory).add(content.username)
                    }));
                }

            });
        }
    }


    // NOTE: Handle so that spamming stop doesnt blow up the program
    handleStop() {
        if(this.state.client) {
            this.state.client.disconnect();
            this.setState({client: null});
        }
    }


    render() {
        let StopButton;
        if(this.state.client) {
            StopButton = <button class='center-btn' onClick={this.handleStop}> Stop Submissions </button>;
        }


        return(
          <Fragment>
            <div>
                <h1 class="centered-info"> {this.state.messageCount}/{this.state.messageLimit} messages | Prefix: {this.state.prefix}</h1> 
                {StopButton}

          </div>

            <div id='mainContent'>
                {
                    this.state.messages.map((entry) => (
                       <Message className="Message" key="" username={entry['username']} message={entry['message']} color={entry['color']} /> 
                    ))
                }
            </div>
          </Fragment>
        );
    }
}

export default View; 
            
