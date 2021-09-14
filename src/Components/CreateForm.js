
import React from "react";
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
        this.setState({prefix: event.target.value.toLowerCase()});
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

          <div class='large-text-centered'>
            <div> 

                <form id='mainContent' onSubmit={this.handleSubmit}>
                        <label for='username'>Twitch Channel:</label>
                        <input type="text" id='username' value={this.state.channel} onChange={this.handleChangeChannel} />

                        <label for='prefix' >Target word / phrase:</label>
                        <input type="text" id='prefix' value={this.state.prefix} onChange={this.handleChangePrefix} />


                        <label for='limit'>Message Limit:</label>
                        <div class='btn-holder'>
                          <input type="number" min='1' id='limit' value={this.state.limit} onChange={this.handleChangeLimit} />
                        </div>

                        <div class='btn-holder'>
                          <input class='submit-btn' type="submit" value="Submit" />
                        </div>

                </form>


            </div>
          </div>

        );
    }
}

export default CreateForm; 
