import React from "react";
import ContactInput from "./components/contact-form-input/ContactInput";
import "./contact-form-section.css";
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

  // Validate Name - Check for empty or short name inputs

  validateName = () => {
    if (this.state.name.trim() === "") {
      return "A name is required";
    }
    if (/[^a-zA-Z -]/.test(this.state.name)) {
      return "Those are invalid letters";
    }
    if (this.state.name.trim().length < 3) {
      return "A name must have more than three characters";
    } else {
      return "";
    }
  };

  // Validate Email - Check for empty, or incorrect email format for input

  validateEmail = () => {
    if (this.state.email.trim() === "") {
      return "An email is required";
    }
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.email
      )
    ) {
      return "";
    } else {
      return "Please enter a valid email address";
    }
  };

  // Validate Message - Check for empty message input

  validateMessage = () => {
    if (!this.state.message) {
      return "A message is required";
    } else {
      return "";
    }
  };

  // Callback for onClick of Send Message button. Uses validators to send alert to user of missing or
  // incorrect information. If everything is good, then it will send an alert telling user their
  // submission went through
  confirmSubmitForm = (event) => {
    if (
      this.validateName() ||
      this.validateEmail().length ||
      this.validateMessage()
    ) {
      alert(`
      Name Error : ${this.validateName() || "No Error"} 
      Email Error : ${this.validateEmail() || "No Error"}
      Message Error : ${this.validateMessage() || "No Error"}`);
    } else {
      alert(
        "Your form was successfully submitted! Check your inbox for a response!"
      );
    }
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
