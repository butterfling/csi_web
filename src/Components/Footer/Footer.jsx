import React from "react";
import logo from "../Images/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-black text-white py-6 container-fluid">
      <div className="container-fluid">
        <div className="footer__left__top flex mb-4">
          <img
            className="footer__left__top__left__logo h-16 md:h-20"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="footer__middle">
          <div className="footer__middle__map w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110224.76532973805!2d77.94632037226738!3d30.307612171853354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1690990070427!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "2" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="footer__middle__bottom mt-4">
            <p class="text-sm text-center md:text-right">
              Copyright 2023 © UPES-CSI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
