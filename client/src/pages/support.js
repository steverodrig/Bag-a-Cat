import React from 'react'
import Footer from '../component/footer'
import '../component/support.css'
import Catboxing from '../component/catboxing'

function Support() {
    
    return (
        <>
        <div className="support-container">
           <div className='support-wrapper'>                    
                <h1>if you are having trouble with your furr demon refer to the contact page</h1>
                <h3>we got you</h3>
            </div>
            <div className='support-wrapper-image'>
            <Catboxing />    
            </div>                    
        </div>
            <Footer />
        </>
    )
}

export default Support;
