import React, { useState } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

const ContactFrom = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    setShowAlert(true);
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mdopkjro",
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(({ response }) => {
        handleServerResponse(false, response.data.error, form);
      });

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  const alertMessage = () => {
    if (serverState.status.ok) {
      return (
        <Alert onClose={() => setShowAlert(false)} severity="success">
          Awesome! I'll email you back as soon as possible.
        </Alert>
      );
    } else {
      switch (serverState.status.msg) {
        case "Validation errors":
          return (
            <Alert onClose={() => setShowAlert(false)} severity="error">
              Oops! Please enter a valid email address so I can email you back.
            </Alert>
          );
        default:
          return (
            <Alert onClose={() => setShowAlert(false)} severity="error">
              Something went wrong. Please try again.
            </Alert>
          );
      }
    }
  };

  return (
    <div className="contact-form">
      <p className="contact-form__description">
        If you want to know more, feel free to leave a message below. I will
        email you back as soon as possible. You can also message me with my
        social media pages
      </p>

      <Collapse in={showAlert}>{serverState.status && alertMessage()}</Collapse>

      <form
        onSubmit={handleOnSubmit}
        method="POST"
        className="contact-form__form"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name here"
          className="contact-form__input"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email here"
          className="contact-form__input"
        />
        <textarea
          rows={5}
          name="message"
          required
          placeholder="Your Message here"
          className="contact-form__input contact-form__input--textarea"
        ></textarea>
        <button
          disabled={serverState.submitting}
          className={`button button--gold u-margin-y-sm ${
            serverState.submitting && "button--loading"
          }`}
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
