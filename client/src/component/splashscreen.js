import React from 'react';
import '../App.css';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './splashscreen.css';

const catMemeLink = "imgur.com/search/score?q=cat+memes"

function SplashScreen() {
  return (
    <div className='splash-container'>
      <video src="/video/B-A-C.mp4" autoPlay loop muted />
      <h1>BAG A CAT</h1>
      <p>like having a mini velociraptor</p>
               <p>in your home</p>
      <div className='splash-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='/adopt'>GET STARTED</Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey-looser')}
        >
          <a href={catMemeLink}>CAT MEMES</a><i className='far fa-play-circle' />
        </Button>
      </div>
      
    </div>
  );
}

export default SplashScreen;