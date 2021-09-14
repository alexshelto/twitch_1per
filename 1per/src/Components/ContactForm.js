
import React from 'react';
import emailjs from 'emailjs-com';
import '../static/contactstyles.css';


export class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      reportType: 'Bug',
      email: '',
      message: ''
    };

    this.sendEmail = this.sendEmail.bind(this);

  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }


  sendEmail(e) {

    e.preventDefault();
    const { reportType, email, message } = this.state;


    let email_params = {
      from_email: email,
      to_name: process.env.REACT_APP_ID,
      report_type: reportType,
      message: message
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE,
      email_params,
      process.env.REACT_APP_ID
    ).then(function(response) {
      alert("Email has been sent, thanks for the feedback!");
    }, function(error) {
      alert('something went wrong, please try again later');
    });

    }


  render() {
    return (
        <form id='mainContent' onSubmit={this.sendEmail}>
            

      <legend> Type of report </legend>
          <div class='radio-group'>


            <div className="radio">
            <label>
              <input
                type="radio"
                value="Bug"
                checked={this.state.reportType === "Bug"}
                onChange={this.handleChange.bind(this,'reportType')}
              />
              Bug 
            </label>
          </div>


          <div className="radio">
            <label>
              <input
                type="radio"
                value="Suggestion"
                checked={this.state.reportType === "Suggestion"}
                onChange={this.handleChange.bind(this, 'reportType')}
              />
              Suggestion
            </label>
          </div>

      </div>

      
        <label>Your email address</label>
        <input id='text' type="text" name="user_email" onChange={this.handleChange.bind(this, 'email')} / >   

        <label>Message</label>
        <textarea id='text' name="message" onChange={this.handleChange.bind(this, 'message')} />

                <div class='btn-holder'>
                  <input class='submit-btn' type="submit" value="Submit" />
                </div>

        </form>
    );
  }


}

export default ContactForm;
