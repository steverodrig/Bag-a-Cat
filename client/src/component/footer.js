import React, { useState, useEffect } from 'react';
import '../component/footer.css';
import { Button } from '../component/button';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const shareUrl = 'https://enigmatic-eyrie-23492.herokuapp.com/';
const title = 'B-A-C';

function Footer() {
  const { user, isAuthenticated } = useAuth0();
  const verified = '/admin'
  const notVerified = '/errorPage'
  const [rout, setRout] = useState([]);
  const adminUser = "bagacat9@gmail.com"

  function adminVerify() {

    if (isAuthenticated) {
      if (user.email.toString() === adminUser.toString()) {
        setRout(verified.toString())
      } else { setRout(notVerified.toString()) }
    } else { setRout(notVerified.toString()) }
  }

  useEffect(() => {
    adminVerify()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Bag a cat newsletter to receive the coolest kitty cats around
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/howworks'>How it works</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/careers'>Careers</Link>           
            <Link to={`${rout}`}>Admin</Link>              
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/support'>Support</Link>
            <Link to='/locations'>Locations</Link>           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/YouTube'>YouTube</Link>
            <Link to='/Cattitude'>Cattitude</Link>           
          </div>
          <div className='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/investors'>Investors</Link>           
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              B-A-C
              <i className='fas fa-cat' />
            </Link>
          </div>
          <small className='website-rights'>B-A-C © 2020</small>
          <h2 className='website-rights'> Share B-A-C on Social Media</h2>
          <div>
            <TwitterShareButton
              url={shareUrl}
              title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div>
            <FacebookShareButton
              url={shareUrl}
              quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>

          <div>
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}>
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>

          <div>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div>
            <PinterestShareButton
              url={String(window.location)}
              media={`${String(window.location)}`}>
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;