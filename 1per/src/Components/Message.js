


import React from 'react';

export class Message extends React.Component {

    render() {
        return (
            <div>
                <p> {this.props.message} </p>
            </div>

        );
    }
}

export default Message
