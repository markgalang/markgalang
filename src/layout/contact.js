import React from "react";
import ProfileCard from "../components/profile-card";
import ContactFrom from "../components/contact-form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="u-container">
        <h1 className="section-header">Get in Touch</h1>
        <div className="contact__content">
          <ProfileCard />
          <ContactFrom />
        </div>
      </div>
    </div>
  );
};

export default Contact;
