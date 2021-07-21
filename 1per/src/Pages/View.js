

import React from 'react';
import Message from '../Components/Message';

import tmi from 'tmi.js';

export class View extends React.Component {
    constructor(props) {
        super(props);

    const client = new tmi.Client({
                channels: [`#${props.location.state.channel}`]
    });

        this.state = {
            channel: props.location.state.channel, 
            prefix: props.location.state.prefix,
            messageCount: 0,
            messageLimit: props.location.state.limit,
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
                    message: message
                }

                if(message.toLowerCase().startsWith(this.state.prefix)) {

                    this.setState(prevState => ({
                        messages: [...prevState.messages, content], 
                        messageCount: prevState.messageCount + 1
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
                        <Message key="" username={entry['username']} message={entry['message']}  />
                    ))
                }
            </div>
        );
    }
}

export default View; 

