


import React from 'react';

import '../static/message.css';

export class Message extends React.Component {

    render() {

        return (
            <div class="message-blob" tabindex="0">
            <h2 class='display-name' >{this.props.username} </h2>
                <br/>
                <span class="message"> {this.props.message} </span>
            </div>
        );
    }
}

export default Message

