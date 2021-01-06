import React from 'react'
import Footer from "../component/footer";
import "../component/foster.css"

const fosterLink = "https://sahumane.org/foster-care"
const foster2Link = "https://www.aspca.org/take-action/volunteer/fosters-needed-across-country"

function Foster() {
    return (
        <>
            <div className="foster-container">
                <section className="foster-wrapper">
                    <h3>Why Foster?</h3>
                    <p>
                        Becoming a foster provides critical care for a shelter critter. Sometimes, foster care provides a needed break from shelter life.
                        Often, fosters are needed for pets who are too young for adoption, or need time to recover from a health issue. Placing these
                        animals into foster homes not only makes their lives better, but also saves the lives of those who take their place. Fostering
                        a shelter animal is a rewarding experience, but requires hard work and dedication. Here at B-A-C we support other organizations that share similar values.
                        If you are interested, please consider opening your home to one of these organizations.
            </p>
                    <a href={fosterLink} target="blank">Foster With the SA Humane Society</a>
                    <a href={foster2Link} target="blank">Foster With the ASPCA</a>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Foster