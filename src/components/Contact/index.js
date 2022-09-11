import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm( { showForm, setShowForm }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section>
      <div className="flex-row">
        <div className="title">
        </div>
        <div className="titletext">
          <div className="flex-row">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="title">
                <div>
                  <h2> Contact Me</h2>
                  <label htmlFor="name">Name:</label>
                  <br />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <br />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                </div>
              </div>
              <div className="titletext">
                <div>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    defaultValue={message}
                    onBlur={handleChange}
                  />
                </div>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;