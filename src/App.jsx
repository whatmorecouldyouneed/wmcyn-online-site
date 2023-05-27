import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowDown, faArrowUp);

import logo from './assets/WMCYN LOGO WHITE.png';

const App = () => {
  const [email, setEmail] = useState('');
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
  const [password, setPassword] = useState('');
  const [isArrowUp, setArrowUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailClick = () => {
    if (isPlaceholderVisible) {
      setPlaceholderVisible(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log('Email submitted:', email);
    console.log('Password submitted:', password);
  };

  const scrollToFriendsAndFamily = () => {
    const friendsAndFamilySection = document.getElementById('friendsAndFamilySection');
    const aboutSection = document.getElementById('aboutSection');
  
    const scrollTarget = isArrowUp ? friendsAndFamilySection : aboutSection;
    const offsetTop = scrollTarget.offsetTop - 100; // Adjust the offset as needed
  
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    setArrowUp(!isArrowUp);
  };
  
  
  
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setArrowUp(false);
  };

  return (
    <div>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="typewriter">
          <Typewriter
            options={{
              strings: ["YOU'RE EARLY...", "SIGN UP FOR OUR NEWSLETTER"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={isPlaceholderVisible ? 'Enter your email' : ''}
            value={email}
            onChange={handleEmailChange}
            onClick={handleEmailClick}
            className="input-field"
          />
          <button type="submit" className="submit-button">Subscribe</button>
        </form>
      </div>

      <div id="friendsAndFamilySection" className="container friends-and-family-section">
        <h2 className="section-heading">FRIENDS AND FAMILY SHOP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
          <button type="submit" className="submit-button">Enter</button>
        </form>
      </div>

      <div className="container" id="aboutSection">
        <h2 className="section-heading">ABOUT WMCYN</h2>
        <p className="section-text">
          WMCYN is a futuristic-based company built on using the advancement of modern technology with the basics of your everyday lifestyle. Here at WMCYN, we plan to show you the multitude of diverse worlds this earth has to offer through goods and services stemming from technology advancements through virtual and augmented reality, fashion, food, art, music and so much more. With many avenues to explore we will go beyond our reach to give you everything you need in order to ask yourself the question, What More Could You Need?
        </p>
      </div>

      <div className="scroll-button-container">
        <button
          className={`scroll-button ${isArrowUp ? 'up' : 'down'}`}
          onClick={isArrowUp ? scrollToTop : scrollToFriendsAndFamily}
        >
          <FontAwesomeIcon icon={isArrowUp ? 'arrow-up' : 'arrow-down'} />
        </button>
      </div>
    </div>
  );
};

export default App;