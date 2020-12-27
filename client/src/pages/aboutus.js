import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import "../component/aboutus.css"



function Aboutus() {
    let Title = useRef(null);
    let textItem = useRef(null)

  useEffect(() => {
    console.log(Title);
   TweenMax.to(Title, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
   TweenMax.to(textItem, .8 , { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2} )
    
  }, [])
    return (
        <div className="aboutus-container">
           <video src="/video/B-A-C.mp4" autoPlay loop muted />
             <h1 ref={el => {Title = el}}>bag a cat</h1>
             <p ref ={el => {textItem = el}}>find your furr demon</p>
             <p>Bag a cat is a non profit organization.
             our sole focus is to get fluffy critters into your home
             no sad sarah mcglothlin music, our cats arent sad
             happy cats only
             alothough they still break all your stuff. but hey they are cute</p>
        </div>
    )
}

export default Aboutus
