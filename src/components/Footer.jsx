import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Justdeal Logo" className="footer-logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/justdealng">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/in/justdeal-nigeria/">
            <SiLinkedin />
          </a>
          <a href="https://www.facebook.com/justdealng">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="tel:+2347016545020">
            <span>+234-(070)-1654-5020</span>
          </a>
        </div>
        <div className="footer-section-columns">
          <a href="mailto:hello@justdeal.ng">
            <span>hello@justdeal.ng</span>
          </a>
        </div>
        <div className="footer-section-columns">
          <a href="https://forms.gle/2qVRsU3qqojEZ1fK7">
            <span>Careers</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
