import React from "react";
import Button from "../../../../components/Button";
import "./contact-input.css";

const ContactInput = ({
  name,
  updateName,
  email,
  updateEmail,
  message,
  updateMessage,
  confirmSubmitForm,
}) => {
  return (
    <div className="contact-input">
      <form>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={updateName}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={updateEmail}
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="What are your plans?"
          value={message}
          onChange={updateMessage}
        />
      </form>
      <Button
        message="Send Message &rarr;"
        color="button-orange"
        confirmSubmitForm={confirmSubmitForm}
      />
    </div>
  );
};

export default ContactInput;
