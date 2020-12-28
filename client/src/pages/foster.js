import React from 'react'
import Footer from "../component/footer";

const fosterLink = "https://sahumane.org/foster-care"
const foster2Link = "https://www.aspca.org/take-action/volunteer/fosters-needed-across-country"
const foster3Link = "https://sahumane.org/foster-care"

function Foster() {
    return (
        <>
        <div className="test-container">          
            <section className="test-wrapper">
                                 
            <p>
            <h3>Why Foster?</h3>
            Becoming a foster provides critical care for a shelter critter. Sometimes, foster care provides a needed break from shelter life.
             Often, fosters are needed for pets who are too young for adoption, or need time to recover from a health issue. Placing these 
             animals into foster homes not only makes their lives better, but also saves the lives of those who take their place. Fostering 
             a shelter animal is a rewarding experience, but requires hard work and dedication. Here at B-A-C we support other organizations that share similar values.
             If you are interested, please consider opening your home to one of these organizations.
                 
            </p> 
            <h1><a href={fosterLink}>Foster With the SA Humane Society</a></h1>
            <h1><a href={foster2Link}>Foster With the ASPCA</a></h1>
           
            </section>                       
        </div>

        <Footer />
        </>
    )
}

export default Foster