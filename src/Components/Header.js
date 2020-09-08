import React, { Component } from 'react';
import "../App.css"

class Header extends Component {
   render() {

      if (this.props.data) {
         // var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <div className="section">
                     <video height="350" autoplay="autoplay" loop muted
                        style={{ marginTop: "-53px" }}>
                        <source src="\images\smoke.mp4" type="video/mp4" />
                     </video>
                     <h1 className="responsive-headline vdo" style={{ color: "#ddd" }}>
                        <span>A</span>
                        <span>Y</span>
                        <span>U</span>
                        <span>S</span>
                        <span>H</span>
                        <span>I</span>
                     </h1>
                  </div>
                  <br /><br />
                  <h3 style={{ marginTop: "100px" }}>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
