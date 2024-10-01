import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowDown, faArrowUp);

import logo from './assets/WMCYN LOGO WHITE.png';
import image from './assets/instagram-logo.png';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, push, set } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYOLsLlqNQTFgwWO1fyHUTgTHQ4JRgA-A',
  authDomain: 'wmcyn-online-web.firebaseapp.com',
  projectId: 'wmcyn-online-web',
  storageBucket: 'wmcyn-online-web.appspot.com',
  messagingSenderId: '552241957320',
  appId: '1:552241957320:web:c32590238a5e7ec06858fd',
  measurementId: 'G-KGVGX3LN7P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Here's the change

function writeUserData(emailID) {
  const emailListRef = ref(db, 'emailList');
  const newEmailRef = push(emailListRef);

  set(newEmailRef, {
    email: emailID,
  });
}

const Shop = () => {
  return (
    <div>
      <h1>Welcome to the Friends and Family Shop</h1>
      <p>This is where exclusive items are available for family members.</p>
    </div>
  );
};

const App = () => {
  const [email, setEmail] = useState('');
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
  const [password, setPassword] = useState('');
  const [isArrowUp, setArrowUp] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // This works fine as long as BrowserRouter is in index.jsx

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(''); // Clear the error message when the user starts typing
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

    // Validate email
    if (!email) {
      setError('email is required.');
      return;
    }

    // Add email to the Firebase database
    writeUserData(email);

    // Update the state to reflect the subscription
    setHasSubscribed(true);
  };

  const handleShopAccess = (e) => {
    e.preventDefault();
    const correctPassword = 'familyshop'; // Password for accessing the shop
    if (password === correctPassword) {
      navigate('/shop'); // Navigate to /shop if the password is correct
    } else {
      setError('incorrect password.');
    }
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

  // added auto arrow effect
  useEffect(() => {
    const handleScroll = () => {
      // check if user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setArrowUp(true);
      } else if (window.scrollY === 0) {
        setArrowUp(false);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        {hasSubscribed ? (
          <>
            <h1 className="typewriter">
              <Typewriter
                options={{
                  strings: ['WMCYN WELCOMES YOU'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>subscribed.</p>
          </>
        ) : (
          <>
            <h1 className="typewriter">
              <Typewriter
                options={{
                  strings: ["YOU'RE EARLY...", 'SIGN UP FOR OUR NEWSLETTER'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder={isPlaceholderVisible ? 'enter your email' : ''}
                value={email}
                onChange={handleEmailChange}
                onClick={handleEmailClick}
                className="input-field"
              />
              <button type="submit" className="submit-button">
                subscribe
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </>
        )}
      </div>

      {/* Friends and Family Shop Section */}
      <div id="friendsAndFamilySection" className="container friends-and-family-section">
        <h2 className="section-heading">FRIENDS AND FAMILY SHOP</h2>
        <form onSubmit={handleShopAccess}>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
          <button type="submit" className="submit-button">
            enter store
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="container" id="aboutSection">
        <h2 className="section-heading">ABOUT WMCYN</h2>
        <p className="section-text">
          future forward start-up built on the advancement of modern technology intertwined with the basics of everyday lifestyle
        </p>
        <div className="instagram-container">
          <a href="https://instagram.com/whatmorecouldyouneed" className="instagram-link">
            <img src={image} alt="Instagram" className="instagram-logo" />
          </a>
        </div>
      </div>

      <div className="scroll-button-container">
        <button
          className={`scroll-button ${isArrowUp ? 'up' : 'down'}`}
          onClick={isArrowUp ? scrollToTop : scrollToFriendsAndFamily}
        >
          <FontAwesomeIcon icon={isArrowUp ? 'arrow-up' : 'arrow-down'} />
        </button>
      </div>

      {/* Routes for the app */}
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
