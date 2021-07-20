

import React from 'react';
import Message from '../Components/Message';


export class View extends React.Component {
    constructor() {
        super();
        this.state = {
            messageCount: 0,
            messageLimit: 420,
            messages: []
        };

        this.handle = this.handle.bind(this);
    }

    handle() {
        console.log('worked');
        this.setState(prevState => ({
            messages: [...prevState.messages, "hello world"]
        }));
    }

    render() {
        return(
            <div>
                <button onClick={this.handle}> Click me </button>
                
                {
                    this.state.messages.map((msg) => (
                        <Message message={msg}  />
                    ))
                }

            </div>

        );
    }
}

export default View; 

