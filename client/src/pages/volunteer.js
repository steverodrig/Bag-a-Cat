import React from 'react'
import Footer from "../component/footer";

const volunteerLink = "https://sahumane.org/volunteer"
const volunteer2Link = "https://www.humanesociety.org/volunteer"
const volunteer3Link = "https://www.aspca.org/take-action/volunteer/volunteer-aspca-adoption-center#steps"

function Volunteer() {
    return (
        <>
        <div className="test-container">          
            <section className="test-wrapper">
                                 
            <p>
            Volunteer programs are the heart and soul of Bag a Cat.
             You will assist in providing the highest-quality care for adorable demons.
              Your crucial gift of time allows organizations to magnify their impact and save more lives. 
              By joining a team of dedicated volunteers, you’ll build strong relationships with other volunteers,
               your community, and the animals themselves. With your dedication, we will continue to save more lives and find 
               amazing animals new homes. Here at B-A-C we support other organizations that share similar values.
             If you are interested, please consider donating your time to one of these organizations.

                 
            </p> 
            <h1><a href={volunteerLink}>Volunteer at the SA Humane Society</a></h1>
            <h1><a href={volunteer2Link}>Volunteer at the Humane Society</a></h1>
            <h1><a href={volunteer3Link}>Volunteer at the ASPCA</a></h1>
           
            </section>                       
        </div>

        <Footer />
        </>
    )
}

export default Volunteer