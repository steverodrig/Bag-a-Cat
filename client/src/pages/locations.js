import React from 'react'
import Footer from '../component/footer'
import '../component/locations.css'

function Locations() {
    return (
        <>
            <div className="location-header">
                <h1>Locations</h1>
            </div>
            <div className="location-section">
                <ul>1234 yo mama street 782234 san antonio tx </ul>
                <ul>5687 panther ave 782336 san antonio tx </ul>
                <ul>978 litter box gueyy 767894 san antonio tx </ul>
            </div>
            <Footer />
        </>
    )
}

export default Locations
