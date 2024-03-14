import React, { Component } from 'react';
import '../styles/contactUsForm.css';

class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending the data to a server)
  };

  render() {
    return (
        <div className='contact-us-body'>
            <div className='right-img'></div>
      <div className="contact-us-form">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
    );
  }
}

export default ContactUsForm;
