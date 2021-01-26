import React from "react";
import ContactInput from "./components/contact-form-input/ContactInput";
import "./contact-form-section.css";
import logoMain from "../../assets/logo-main.png";
import Header from "../../components/Header";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  // Callback function to lift name state up from ContactInput
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  // Callback function to lift email state up from ContactInput
  updateEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  // Callback function to lift message state up from ContactInput
  updateMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  // Callback to print alert of the form data gathered from the contact form
  confirmSubmitForm = (event) => {
    alert(
      `Hello, ${this.state.name} we got your message. Check at ${this.state.email} for a response.`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div className="contact-form-section">
        <Header color="orange" />
        <ContactInput
          name={this.state.name}
          updateName={this.updateName}
          email={this.state.email}
          updateEmail={this.updateEmail}
          message={this.state.message}
          updateMessage={this.updateMessage}
          confirmSubmitForm={this.confirmSubmitForm}
        />
      </div>
    );
  }
}

export default ContactForm;
