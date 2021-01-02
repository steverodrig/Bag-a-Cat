import React from 'react';
import '../component/footer.css';
import { Button } from '../component/button';
import { Link } from 'react-router-dom';
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

const shareUrl = 'http://github.com';
    const title = 'GitHub';
    
function Footer() {
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
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
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