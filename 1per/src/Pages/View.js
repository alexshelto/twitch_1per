
import React from 'react';
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
        console.log('in did mount');

        if(this.state.messageCount < this.state.messageLimit) {
            console.log("stepping inside for more");

            this.state.client.on('message', (channel, userstate, message, self) => {

                if(this.state.messageCount >= this.state.messageLimit) {
                    console.log("hit limit we gone");
                    //NOTE: probably just kill the irc bot as well 
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
                        //messages: [...prevState.messages, content], 
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
        if(this.state.client)
            this.state.client.disconnect();
    }


    render() {
        if(!this.state.client) {
            return <h1> State NULL </h1>;
        } 


        return(
            <div>
            <h1>{this.state.messageCount}/{this.state.messageLimit} messages | Prefix: {this.state.prefix}</h1>
                <button onClick={this.handleStop}> Stop Submissions </button>

                
                {
                    this.state.messages.map((entry) => (
                        <Message className="Message" key="" username={entry['username']} message={entry['message']} color={entry['color']} />
                    ))
                }
                

            </div>
        );
    }
}

export default View; 


            
