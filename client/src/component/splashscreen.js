import React from 'react';
import '../App.css';
import { Button } from './button';
import Profile from "../component/Profile/index";
import './splashscreen.css';

function SplashScreen() {
  return (
    <div className='splash-container'>
      <video src="/video/B-A-C.mp4" autoPlay loop muted />
      <h1>BAG A CAT</h1>
      <p>like having a mini vilosal raptor</p>
               <p>in your home</p>
      <div className='splash-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey-looser')}
        >
          CAT MEMES <i className='far fa-play-circle' />
        </Button>
      </div>
      <Profile />
    </div>
  );
}

export default SplashScreen;