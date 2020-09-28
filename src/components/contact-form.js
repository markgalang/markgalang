import React from "react";

const ContactFrom = () => {
  return (
    <div className="contact-form">
      <p className="contact-form__description">
        If you want to know more, feel free to leave a message below. I will
        email you back as soon as possible. You can also message me with my
        social media pages
      </p>

      <form action="#" className="contact-form__form">
        <input
          type="text"
          name="name"
          placeholder="Your Name here"
          className="contact-form__input"
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email here"
          className="contact-form__input"
        />
        <textarea
          type="text"
          rows={5}
          name="message"
          placeholder="Your Message here"
          className="contact-form__input contact-form__input--textarea"
        ></textarea>
        <button className="button button--gold u-margin-y-sm" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
