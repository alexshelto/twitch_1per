import React, { Component } from 'react';

export class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {channel: '',
                      prefix: '',
                      limit: 0 
                    };

        this.handleChangeChannel = this.handleChangeChannel.bind(this);
        this.handleChangePrefix= this.handleChangePrefix.bind(this);
        this.handleChangeLimit = this.handleChangeLimit.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeChannel(event) {
        this.setState({channel: event.target.value});
    }

    handleChangePrefix(event) {
        this.setState({prefix: event.target.value});
    }
    handleChangeLimit(event) {
        this.setState({limit: event.target.value});
    }

    handleSubmit(event) {
        alert(`This form was entered:\nChannel: ${this.state.channel}\nPrefix: ${this.state.prefix}\nLimit: ${this.state.limit}`);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div id="form-items">
                    <label>
                        Twitch Channel:
                        <input type="text" value={this.state.channel} onChange={this.handleChangeChannel} />
                    </label>
                    <label>
                        Message Prefix:
                        <input type="text" value={this.state.prefix} onChange={this.handleChangePrefix} />
                    </label>
                    <label>
                        Message Limit:
                        <input type="number" value={this.state.limit} onChange={this.handleChangeLimit} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
