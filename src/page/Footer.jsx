/**
 * title: Footer.jsx
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: this component handles the menu aspect of the webpage
 */
// main menu page component
import React from 'react';
// import { NavLink } from 'react-router-dom';
// bring what ever component to render

// const selectedStyle = {
//   color: 'slategrey',
//   backgroundColor: 'white'
// };

const Footer = () => (
  <footer className="footerClass">
    <h3 className="footerPiece">FooterHeader</h3>
    <address className="footerPiece">address</address>
    <time className="footerPiece"> time</time>
    <figcaption className="footerPiece">figure caption</figcaption>
  </footer>
);

export default Footer;
