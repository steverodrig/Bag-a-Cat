import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import '../../App.css'






function Signin() {
    let Card = useRef(null);
    // let textItem = useRef(null)
  
    useEffect(() => {
      console.log(Card);
     TweenMax.to(Card, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
    //  TweenMax.to(textItem, .8 , { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2} )
      
    }, [])




    return (
        <>
        <div className='cards'>
        <h1>Check out these EPIC Kitty Cats!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <input  type="email" className="form-control" id="foatingInput" placeholder="name@whatevs.com">
            <label  for="floatingInput">Email address</label>   
            </input>
            <br></br>
            <input type="password" className="form-control" id="foatingInput" placeholder="password">
            <label  for="floatingInput">Password</label>   
            </input>
            <br></br>
            <input  type="username" className="form-control" id="foatingInput" placeholder="username">
            <label for="floatingInput">user name</label>   
            </input>             
            </ul>
          </div>
        </div>
      </div>
       
        </>        
            
    )
    
}

export default Signin
