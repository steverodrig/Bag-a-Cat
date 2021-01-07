import React from 'react'
import '../component/catboxing.css'

function Catboxing() {
    return (
        <div className='catboxing'>
          <img src='/images/catboxing8p11.png' 
          srcSet='/images/catboxing8p11.png,       
                  /images/catboxing8p11-1000.png,       
                  /images/catboxing8p11-1500.png'         
          alt=''></img>  
        </div>
    )
}

export default Catboxing
