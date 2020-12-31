
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../component/learnmore.css"
import { Button } from "../component/button"
import Footer from "../component/footer";
import Axios from "axios";
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

  const shareUrl = `http://github.com`;
  const title ="GitHub";

function LearnMore(props) {

    const [cat, setCat] = useState([]);

    function loadCat() {
        API.getCatDetails(props.match.params.id)
            .then(res => setCat(res.data))
            .catch(err => console.log(err));

    }
    useEffect(() => {
        loadCat()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleAdoption(event) {
        event.preventDefault();
        
        Axios.put(`/v1/cat/${props.match.params.id}`, {
            ...cat, 
            adopted: true
        })
    } 

    // props will need to be updated with actual data from get request
    return (
        <>
            <div className="learn-container">
              <div className="learn-wrapper">
              <br />
                <h1>Hi, I'm {cat.name}</h1>
                <img alt='cat' src={cat.image} />
                <br />
                {cat.description}
                <br />
                <h3>Still interested in me?</h3>
                <Button onClick={()=>handleAdoption}><Link to={`/catApp/${props.match.params.id}`}>Apply to Adopt</Link></Button>                    
                        <h4>Adoption Fee: </h4>
                        <p>   <i class="fas fa-paw"></i> $85</p>
                        <br />
                        <br />
                        <h4>The pet adoption fee includes:</h4>
              <p>Spay/neuter surgery, age appropriate vaccinations,
                 microchip, internal and external parasite treatment, 
                 heartworm prevention, 30 days of Pet Insurance, a starter bag of Heritage 
                 Ranch by H-E-B pet food and more! Fees may be different during adoption specials.
                  Call 210-210-2100 for details!</p>
        <div>         
          <TwitterShareButton
            url={shareUrl + cat._id}
            title={cat.name}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>        
          <FacebookShareButton
            url={shareUrl + cat._id}
            quote={cat.name}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>        
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}>
            <RedditIcon size={32} round />
          </RedditShareButton>        
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>       
          <PinterestShareButton
            url={String(window.location)}
            media={`${String(window.location)}`}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>
      </div>          
    </div>
    <Footer />
        </>
    )
}

export default LearnMore;

