
import React from 'react';
import { Redirect } from 'react-router-dom';



export class CreateForm extends React.Component {
    constructor() {
        super();
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
        //alert(`This form was entered:\nChannel: ${this.state.channel}\nPrefix: ${this.state.prefix}\nLimit: ${this.state.limit}`);
        event.preventDefault();
        console.log("submit clicked");

        // Move to new page, get unique id thing for user
        // uuid
        //this.props.history.push('/view');
        return <Redirect to='/view' />;
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                    <label>
                        Twitch Channel:
                    </label>
                        <input type="text" value={this.state.channel} onChange={this.handleChangeChannel} />
                    <label>
                        Message Prefix:
                    </label>
                        <input type="text" value={this.state.prefix} onChange={this.handleChangePrefix} />
                    <label>
                        Message Limit:
                    </label>
                        <input type="number" value={this.state.limit} onChange={this.handleChangeLimit} />
                <input type="submit" value="Submit" />
            </form>

        );
    }
}

export default CreateForm; 
