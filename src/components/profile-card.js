import React from "react";
import { Linkedin, Twitter, GitHub, Mail } from "react-feather";
import CasualPortrait from "../images/mark-casual.jpg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src={CasualPortrait}
        alt="Mark Galang"
        className="profile-card__image"
      />
      <h1 className="profile-card__name">Mark Galang</h1>
      <h1 className="profile-card__position">Software Engineer</h1>
      <h2 className="profile-card__location">
        Philippines{" "}
        <span role="img" aria-label="location flag">
          🇵🇭
        </span>{" "}
      </h2>
      <div className="social-media-icons">
        <a href="https://www.google.com/">
          <Twitter className="social-media-icon" />
        </a>
        <a href="https://www.google.com/">
          <Linkedin className="social-media-icon" />
        </a>
        <a href="https://www.google.com/">
          <GitHub className="social-media-icon" />
        </a>
        <a href="https://www.google.com/">
          <Mail className="social-media-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
