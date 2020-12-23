import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";



function Aboutus() {
    let Title = useRef(null);
    let textItem = useRef(null)

  useEffect(() => {
    console.log(Title);
   TweenMax.to(Title, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
   TweenMax.to(textItem, .8 , { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2} )
    
  }, [])
    return (
        <div className="aboutus">
             <h1 ref={el => {Title = el}}>bag a cat</h1>
             <p ref ={el => {textItem = el}}>find your furr demon</p>
        </div>
    )
}

export default Aboutus
