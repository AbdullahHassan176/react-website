import React from 'react';
import ContactImage from "../assets/pexels-tara-winstead-8849282.jpg";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'style={{ backgroundImage: `url(${ContactImage})` }}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id = "contact-form" method = "Post" >
            <label htmlFor = "name"> Full Name </label>
            <input name = "name" placeholder = "Enter full name..." type = "text" />
            <label htmlFor = "email"> Email Address </label>
            <input name = "email" placeholder = "Enter email address..." type = "email" />
            <label htmlFor = "message"> Message </label>
            <textarea 
            rows = "6"
            placeholder='Enter message...'
            name = "message"
            required
            ></textarea>
            <button type = "submit"> Send Message </button>

        </form>


      </div>
    </div>
  );
}

export default Contact;
