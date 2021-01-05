import React from 'react'
import Footer from "../component/footer";
import "../component/donate.css"

const donateLink = "https://secure.humanesociety.org/site/Donation2?idb=1815610938&df_id=23356&mfc_pref=T&23356.donation=form1&s_src=web_topnav_donate&23356_donation=form1"
const donate2Link = "https://sahumane.org/donate"
const donate3Link = "https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlebrand-T4&initialms=MP_PMK_Googlebrand-T4&pcode=WPSE9XXGOGN2PK00014&lpcode=WPSE9XXGOGN1PK00014&test&gclsrc=aw.ds&ds_rl=1066461&gclid=Cj0KCQiAoab_BRCxARIsANMx4S6LBf0xaSihsSKfFt6CdUQLSEdPJ0mKUhUzCKrArbau3otPqhBCxoYaAqKeEALw_wcB"
function Donate() {
    return (
        <>
        <div className="donate-container">          
            <section className="donate-wrapper">
            <image src="/images/catboxing8p11.png" />                    
            <p>
            Every animal shelter and rescue organization has bills to pay and your generous monetary donation will be gratefully accepted.
             Donations may be used to help cover the costs of daily operations, supplies, staff training, animal housing upgrades, community outreach programs, animal enrichment and much more.
            The organizations that Bag a Cat supports are nonprofit and rely on donations
                and support from individuals, groups, businesses, corporations and foundations.
                These donations fund our programs, supplies and operational expenses.
                Bag a cat provides all of its critters with food, shelter, veterinary care and luvvv.
                Here at B-A-C we support other organizations that share similar values.
              Please consider donating to one of these organizations below. Thank you for our adorable demons!
               
            </p> 
            <a href={donateLink} target="blank">Donate to Humane Society</a>
            <a href={donate2Link} target="blank">Donate to SA Humane Society</a>
            <a href={donate3Link} target="blank">Donate to the ASPCA</a>
            </section>                       
        </div>

        <Footer />
        </>
    )
}

export default Donate
