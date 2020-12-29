import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
<<<<<<< HEAD
import "../component/aboutus.css"
import Footer from "../component/footer"
import Testimonials from "./testimonials";
=======
import "../component/aboutus.css";
import Footer from "../component/footer";

>>>>>>> main



function Aboutus() {
    let Title = useRef(null);
    let textItem = useRef(null)

  useEffect(() => {
    console.log(Title);
   TweenMax.to(Title, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
   TweenMax.to(textItem, .8 , { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2} )
    
  }, [])
    return (
      <>
        <div className="aboutus-container">
           <video src="/video/B-A-C.mp4" autoPlay loop muted />
           <div className="about-wrapper">
           <h1 ref={el => {Title = el}}>bag a cat</h1>
             <p ref ={el => {textItem = el}}>find your furr demon</p>
             <h2>Our Mission</h2>
             <p>We provide the programs and services needed to eliminate the killing of at-risk animals due to lack of space, adopter or foster</p>
             <h2>Keep em alive!!</h2>
             <p>Bag a Cat! is a 501(c)3 non-profit organization. Due to alarming euthanasia rates of  fluffy critters, Bag a Cat was founded in late 2020.
                 Bag a Cat is unique—it is the only high paced, high-volume rescue in San Antonio, saving 5,000 at-risk cats from euthanasia annually.</p>
                 <h2>Happy Dudes</h2>
             <p className="happy-dudes">
             our sole focus is to get fluffy critters into your home
             no sad sarah mcglothlin music, our cats arent sad
             happy cats only
             alothough they still break all your stuff. but hey they are cute</p>
        </div>
        
      </div>
      <Footer />
      </>
    )
}

export default Aboutus
