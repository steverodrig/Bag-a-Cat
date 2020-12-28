import React from 'react'
import "../component/howworks.css"
import { Button } from '../component/button';

function Howworks() {
    return (
        <div className="how-works-container">
            
           
            <section className="how-works-wrapper">
            <h1>How it works</h1>
            <h3>DONATE</h3>
            {/* <p>
            Bag a Cat is a nonprofit organization that relies on donations
                and support form individuals, groups, businesses, corporations and foundations
                to fund our programs, supplies and operational expenses.
                Bag a cat provides all of its critters with food, shelter, veterinary care and luvvv. 
            </p> */}
               
                <h3>we need your help</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                DONATE
                </Button>

                </div>
                
            </section>
            <section className="how-works-wrapper">
            <h3>VOLUNTEER</h3>
            {/* <p>
            Our volunteer program is the heart and soul of Bag a Cat.
             You will assist our staff in providing the highest-quality care for our demons.
              Your crucial gift of time allows us to magnify our impact and save more lives. 
              By joining our team of dedicated volunteers, you’ll build strong relationships with other volunteers,
               our community, and the animals themselves. With your dedication, we will continue to save more lives and find 
               amazing animals new homes.

                Step One: Complete a volunteer application and choose an orientation date. Main Campus or B-A-C Center
                Step Two: After you have completed the application and scheduled your orientation class, you will receive a confirmation email.
                Step Three: After you attend an orientation, you will receive an email with a link to create a password in our volunteer portal, 
                your volunteer clock-in PIN, and notification that you have been switched from “Applicant” to “Active”. You’ll also receive a copy 
                of our Volunteer Handbook. PLEASE REVIEW THIS MATERIAL.
                Step Four: Sign up for your first volunteer assignment on the volunteer portal. Remember: you must volunteer at least 12 hours every 
                three months to remain active.
                Step Five: Give yourself a pat on the back. You’re making a difference!
                Please note that the minimum age to volunteer is 12. Volunteers 16 and older may volunteer independently with signed permission by a legal guardian.
                 Children, age 12 to 15 must be accompanied by a parent or legal guardian who is also a B-A-C volunteer (who has completed orientation) at all times. 
                 Children under the age of 12 can join our demon Champion program. Learn more about the demon Champion program by visiting this link.
            </p> */}
               
                <h3>SCOOP DA POOP</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                VOLUNTEER
                </Button>

                </div>
                
            </section>
            <section className="how-works-wrapper">
            <h3>FOSTER</h3>
            {/* <p>
            <h3>Why Foster?</h3>
            Becoming a foster provides critical care for a shelter critter. Sometimes, foster care provides a needed break from shelter life.
             Often, fosters are needed for pets who are too young for adoption, or need time to recover from a health issue. Placing these 
             animals into foster homes not only makes their lives better, but also saves the lives of those who take their place. Fostering 
             a shelter animal is a rewarding experience, but requires hard work and dedication.
            </p>
                */}
                <h3>WHAT COULD GO WRONG</h3>
                <div className="how-works-btn">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                FOSTER
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
                ADOPT
                </Button>

                </div>
                
            </section>

            
        </div>
    )
}

export default Howworks
