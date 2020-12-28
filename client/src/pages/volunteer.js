import React from 'react'
import Footer from "../component/footer";

const volunteerLink = "https://sahumane.org/volunteer"

function Volunteer() {
    return (
        <>
        <div className="test-container">          
            <section className="test-wrapper">
                                 
            <p>
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
                 
            </p> 
            <h1><a href={volunteerLink}>Volunteer Here</a></h1>
           
            </section>                       
        </div>

        <Footer />
        </>
    )
}

export default Volunteer