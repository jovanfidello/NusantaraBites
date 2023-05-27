import React from 'react';
import "./Footer.scss";
import logoImage from "../../assets/images/logo.png"; 
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logoImage} alt="NusantaraBites Logo" className="navbar-brand-image" />
            <h2 className="footer-title">NusantaraBites.</h2>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <NavLink to={`/about`}>
           <span className='text-uppercase text-white fs-20'>About Us</span> 
          </NavLink>
          <p>Jakarta, Indonesia</p>
          <p>PTI_Kelompok4@students.umn.ac.id</p>
          <p>+62 8123 4567 910</p>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()}, developed by Linda, Jovan, Joicelyn. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
