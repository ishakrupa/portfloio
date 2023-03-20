import React,{useRef, useState, useContext}from 'react'
import emailjs from "emailjs-com";
import "./Contacts.css";
import { themeContext } from "../../Context";

const Contacts = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const[Done,setDone]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emx99nz', 'template_p3q6pz6', form.current, 'NG6-5zcgTSkdrmx7X')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });



    }




  return (
    <div className='contact-form'>
      <div className="c-left">
      <div className="awesome">
<span style={{color: darkMode?'var(--orange)': ''}}>Get in Touch</span>
<span style={{color: darkMode?'white': ''}}>Contact Me</span>
<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
</div>
      </div>



      <div className="c-right">
    <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="user_name" className='user' placeholder='Name'/>
        <input type="email" name="user_email" className='user' placeholder='Email'/>
        <textarea name="message" className='user' placeholder='Message'/>
        <input type="submit" value="send" className='button'   />
      
        <span>{ Done && "Thanks for Contacting Me"}</span>

        <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>


    </form>
    </div>
    </div>






  )
}

export default Contacts
