/**
 * title: MiddleBody.jsx
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: this component handles the menu aspect of the webpage
 */
// main menu page component
import React from 'react';
import Footer from './Footer';

// import { NavLink } from 'react-router-dom';
// bring what ever component to render

// const selectedStyle = {
//   color: 'slategrey',
//   backgroundColor: 'white'
// };

const MiddleBody = () => (
  <div className="MiddleSection">
    <header className=" MiddleHeader ">
      <h3 className=" MiddleTopBody">MiddleTopBody</h3>
    </header>
    <section className="secticle">Section</section>
    <section className="secticle">Section</section>
    <article className="secticle">Article</article>
    <article className="secticle">Article</article>
    <Footer />
  </div>
);

export default MiddleBody;
