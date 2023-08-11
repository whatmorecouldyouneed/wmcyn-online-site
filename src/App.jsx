import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowDown, faArrowUp);

import logo from './assets/WMCYN LOGO WHITE.png';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYOLsLlqNQTFgwWO1fyHUTgTHQ4JRgA-A",
  authDomain: "wmcyn-online-web.firebaseapp.com",
  projectId: "wmcyn-online-web",
  storageBucket: "wmcyn-online-web.appspot.com",
  messagingSenderId: "552241957320",
  appId: "1:552241957320:web:c32590238a5e7ec06858fd",
  measurementId: "G-KGVGX3LN7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Here's the change

function writeUserData(emailID) {
  const emailListRef = ref(db, 'emailList');
  const newEmailRef = push(emailListRef);
  
  set(newEmailRef, {
    email: emailID
  });
}



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
    
    // Add email to the Firebase database
    writeUserData(email);
  
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
        future forward start-up built on the advancement of modern technology intertwined with the basics of everyday lifestyle
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