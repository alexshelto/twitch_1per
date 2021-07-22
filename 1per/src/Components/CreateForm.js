
import React from 'react';
import { Redirect } from 'react-router-dom';

import '../static/createform.css';


export class CreateForm extends React.Component {
    constructor() {
        super();
        this.state = {channel: '',
                      prefix: '',
                      limit: 0 ,
                      redirect: false
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
        event.preventDefault();

        if(this.state.limit > 0) {
            console.log("Valid limit");
            this.setState({redirect: true});
        }

        // Move to new page, get unique id thing for user
        // uuid
    }

    render() {

        const { redirect } = this.state;
        console.log(`In render, current redirect status: ${redirect}`);

        if (redirect) {
            return <Redirect 
                to={{
                    pathname: '/view',
                    state: {
                        channel: this.state.channel, 
                        limit: this.state.limit,
                        prefix: this.state.prefix
                    }
                }}
            />
        }


        return(
            <div class='centered-div'> 

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
                        <br/>
                    <input class='submit-btn' type="submit" value="Submit" />
                </form>

            </div>

        );
    }
}

export default CreateForm; 
