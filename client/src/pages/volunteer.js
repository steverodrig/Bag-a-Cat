import React from 'react'
import Footer from "../component/footer";
import "../component/volunteer.css"

const volunteerLink = "https://sahumane.org/volunteer"
const volunteer2Link = "https://www.humanesociety.org/volunteer"
const volunteer3Link = "https://www.aspca.org/take-action/volunteer/volunteer-aspca-adoption-center#steps"

function Volunteer() {
    return (
        <>
            <div className="volunteer-container">
                <section className="volunteer-wrapper">
                    <p>
                        Volunteer programs are the heart and soul of Bag a Cat.
                        You will assist in providing the highest-quality care for adorable demons.
                        Your crucial gift of time allows organizations to magnify their impact and save more lives.
                        By joining a team of dedicated volunteers, you’ll build strong relationships with other volunteers,
                        your community, and the animals themselves. With your dedication, we will continue to save more lives and find
                        amazing animals new homes. Here at B-A-C we support other organizations that share similar values.
                        If you are interested, please consider donating your time to one of these organizations.
                    </p>
                    <a href={volunteerLink} target="blank">Volunteer at the SA Humane Society</a>
                    <a href={volunteer2Link} target="blank">Volunteer at the Humane Society</a>
                    <a href={volunteer3Link} target="blank">Volunteer at the ASPCA</a>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Volunteer;