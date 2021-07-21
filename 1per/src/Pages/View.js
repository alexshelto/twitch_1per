
import React from 'react';
import Message from '../Components/Message';

import tmi from 'tmi.js';

export class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: null,
            channel: props.location.state.channel, 
            messageCount: 0,
            messageLimit: 5,
            messages: []
        };
        this.handleStop = this.handleStop.bind(this);
    }


    componentDidMount() { 

        console.log('in did mount');

        const client = new tmi.Client({
            channels: [`#${this.state.channel}`]
        });

        client.connect();
        this.setState({client: client});
        
        if(this.state.messageCount <= this.state.messageLimit) {


            client.on('message', (channel, userstate, message, self) => {
                const content = {
                    username: userstate['display-name'],
                    message: message
                }

                this.setState(prevState => ({
                    messages: [...prevState.messages, content], 
                    messageCount: prevState.messageCount + 1
                }));

                if(this.state.messageCount >= this.state.messageLimit) {
                    return;
                }
                console.log(`count: ${this.state.messageCount} | limit: ${this.state.messageLimit}`);

            });
        }
    }



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
            <h1> Current submission count: {this.state.messageCount} </h1>
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

