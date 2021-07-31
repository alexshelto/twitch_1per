//import { Redirect } from 'react-router-dom';


import React from 'react';
import emailjs from 'emailjs-com';



export class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      contactType: 'Bug',
      email: ''
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleRadioChange(event) {
    this.setState({contactType: event.target.value});
  }

  sendEmail(event) {
    event.preventDefault();
    alert(event.target);
  }


  render() {
    return (
        <form id='mainContent' onSubmit={this.sendEmail}>
            
          <div class='radio-group'>

            <div className="radio">
            <label>
              <input
                type="radio"
                value="Bug"
                checked={this.state.contactType === "Bug"}
                onChange={this.handleRadioChange}
              />
              Bug 
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Suggestion"
                checked={this.state.contactType === "Suggestion"}
                onChange={this.handleRadioChange}
              />
              Suggestion
            </label>
          </div>

      </div>
      
        <label>Email</label>
        <input type="email" name="user_email" />   

                <div class='btn-holder'>
                  <input class='submit-btn' type="submit" value="Submit" />
                </div>

        </form>
    );
  }


}

export default ContactForm;
