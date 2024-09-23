import React from 'react';
import './Hero.css';
import profilePic from '../../assets/myPicture.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';



function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profilePic} />
      <h1>
        <span>I'm Muhammad Umair,</span>
        Frontend developer</h1>
      <p>I am a frontend developer from Jaranwala, Punjab with 6 months of experince</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink href="#contact" className="anchor-link" offset={50} >
            let's connect</AnchorLink>
        </div>
        <div className="hero-resume">
          <a className='anchor-link'>My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
