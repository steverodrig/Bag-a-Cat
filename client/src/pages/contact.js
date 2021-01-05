import React from 'react'
import {useForm} from "react-hook-form";
import Footer from '../component/footer'
import '../component/contact.css'

function Contact() {
    const { contact, handleSubmit, message } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>        
        <div className="contact-container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input className='contact-input' type="text" placeholder="Email" name="email" ref={contact}/>
        <input className='contact-input' type="text" placeholder="name" name="name" ref={contact}/>
        <textarea className='message-input' type='text' placeholder='send us a message' ref={message}></textarea>
        <input  className='contact-input' type="submit" />
        </form>
        </div>  
        <aside className='contact-info'>
            <div className='ourInfo-container'>
                <h1>Contact info</h1>
                <h3>B-A-C</h3>
                <ul>www.bagacat9@gmail.com</ul>
                <ul>12345 wuka street San Antonio, Texas</ul>
            </div>
        </aside>
        <div className='footer-div'>
        <Footer />
        </div>
        
        
        
       
         </>
         
    )
}

export default Contact
