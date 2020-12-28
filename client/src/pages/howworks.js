import React from 'react'
import "../component/howworks.css"
import { Button } from '../component/button';
import { Link } from 'react-router-dom';
import Footer from "../component/footer";

function Howworks() {
    return (
        <>
        <div className="how-works-container">
            
           
            <section className="how-works-wrapper">
            <h1>How it works</h1>
            <h3>DONATE</h3>
               
                <h3>we need your help</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                <Link to='/donate'>Donate</Link>
                </Button>

                </div>
                
            </section>
            <section className="how-works-wrapper">
            <h3>VOLUNTEER</h3>
               
                <h3>SCOOP DA POOP</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                <Link to='/volunteer'>Volunteer</Link>
                </Button>

                </div>
                
            </section>
            <section className="how-works-wrapper">
            <h3>FOSTER</h3>
            
                <h3>WHAT COULD GO WRONG</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                <Link to='/foster'>Foster</Link>
                </Button>

                </div>
                
            </section>
            <section className="how-works-wrapper">
            <h3>ADOPT</h3>
            
                <h3>YOUR COUCH IS WAITING</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                <Link to='/adopt'>Adopt</Link>
                </Button>

                </div>
                
            </section>

            
        </div>
        <Footer/>
        </>
    )
}

export default Howworks
