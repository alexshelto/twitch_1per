


import React from 'react';

import '../static/message.css';

export class Message extends React.Component {

    render() {
        let color = this.props.color || '#64415a5';
        const style = {
            backgroundColor: { color }
        };

        console.log(style.color);


        return (
            <div class="message-blob" >
            <h2 class='display-name' >{this.props.username} </h2>
                <br/>
                <span class="message"> {this.props.message} </span>
            </div>
        );
    }
}

export default Message

                //<span class='display-name' >{this.props.username} </span>
