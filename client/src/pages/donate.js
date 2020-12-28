import React from 'react'
import Footer from "../component/footer";

const donateLink = "https://secure.humanesociety.org/site/Donation2?idb=1815610938&df_id=23356&mfc_pref=T&23356.donation=form1&s_src=web_topnav_donate&23356_donation=form1"

function Donate() {
    return (
        <>
        <div className="test-container">          
            <section className="test-wrapper">
                                 
            <p>
            Every animal shelter and rescue organization has bills to pay and your generous monetary donation will be gratefully accepted.
             Donations may be used to help cover the costs of daily operations, supplies, staff training, animal housing upgrades, community outreach programs, animal enrichment and much more.
            Bag a Cat is a nonprofit organization that relies on donations
                and support form individuals, groups, businesses, corporations and foundations
                to fund our programs, supplies and operational expenses.
                Bag a cat provides all of its critters with food, shelter, veterinary care and luvvv.
                B-A-C also supports all pets and the Humane Society!
                 
            </p> 
            <h1><a href={donateLink}>Donate Here</a></h1>
           
            </section>                       
        </div>

        <Footer />
        </>
    )
}

export default Donate
