<<<<<<< HEAD
import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import LoginButton from "../component/LoginBtn";
import Profile from "../component/Profile";
=======
import "../App.css"
import SplashScreen from "../component/splashscreen"
import React from "react";
import Adopt from '../pages/adopt'
import Footer from '../component/footer'
>>>>>>> main

function Home() {
   

    return (
<<<<<<< HEAD
        <div>
            <header>
                <Profile />
            </header>
           <h1 ref={el => {Title = el}} strong>BAG A CAT</h1> 
           <p ref ={el => {textItem = el}} strong>furr babies</p>
           <LoginButton />
        </div>
=======
        <>
         <SplashScreen />
         <Adopt />
         <Footer />            
        </>
>>>>>>> main
    )
}

export default Home
