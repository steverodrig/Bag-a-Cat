import React from 'react';
import '../App.css';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './splashscreen.css';

function SplashScreen() {
  return (
    <div className='splash-container'>
      <video src="/video/B-A-C.mp4" autoPlay loop muted />
      <h1>BAG A CAT</h1>
      <p>And take home your very own</p>
      <p>mini velociraptor</p>
      <div className='splash-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/adopt'>GET STARTED</Link>
        </Button>
        <Button className="memeButton" buttonSize='btn--large'>
          <a href="https://imgur.com/search/score?q=cat+memes" target="blank">CAT MEMES</a>
        </Button>
      </div>
    </div>
  );
}

export default SplashScreen;