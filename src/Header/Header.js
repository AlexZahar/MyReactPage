import React from "react";
import "./Header.scss";
import resumeIcon from "../assets/icons/resume.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedInIcon from "../assets/icons/linkedin_filled_logo.svg";
import emailIcon from "../assets/icons/envelope.svg";

const header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_container-options">
        <a
          href="../assets/resume/Resume_Alexandru-Zahar.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={resumeIcon} className="icon" alt="Resume"></img>
        </a>
        <a
          href="https://github.com/DaDiCeMa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={githubIcon} className="icon" alt="Github"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/zahar-alex-179082147/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedInIcon} className="icon" alt="LinkedIn"></img>
        </a>
        <a
          href="mailto:zaharalex25@gmail.com?Subject=Hello%20"
          target="_top"
          rel="noopener noreferrer"
        >
          <img src={emailIcon} className="icon icon-email" alt="Email"></img>
        </a>
      </div>
    </div>
  );
};

export default header;
