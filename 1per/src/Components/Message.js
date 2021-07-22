


import React from 'react';

export class Message extends React.Component {

    render() {
        return (
            <div>
                <h2> {this.props.username} </h2>
                <p> {this.props.message} </p>
            </div>

        );
    }
}

export default Message
