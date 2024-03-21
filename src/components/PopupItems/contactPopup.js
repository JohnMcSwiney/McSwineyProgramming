import React from 'react'
import { useAppContext } from "../../context/AppContext";
import { RxCross2 } from "react-icons/rx";
import "./popupStyles.css";

function ContactPopup() {
    const appContext = useAppContext();



    return (
    <div className='popup slide-in-fwd-center'>
        <button onClick={() => appContext.updatePopupType("NONE")} className='btn close-btn'><RxCross2 /></button>
        <h2>Contact Form</h2>
        <p>Thank you for reaching out! Please fill in the form below to get in touch with. I'm utilizing FormSubmit.co to handle our contact form submissions. Rest assured, your message will be securely delivered.</p>
        <form action="https://formsubmit.co/a73139c641a057247769d39f2cf63605" method="POST" className='about-form'>
            <label>Name:<input type="text" name="Name" required placeholder='Humphrey A-Parrot...' className='inp-text'/><p>[Required]</p></label>
            <label>Email: <input type="email" name="Email" required placeholder='H.Parrot@email.com' className='inp-text'/><p>[Required]</p></label>
            <label>Description:<input type='text' name="Description" placeholder='Click to add a description' className='inp-text'/></label>
            <div className='popup-check-cont'>
                <h3><strong>Notice:</strong>After submitting the form, you will be redirected to FormSubmit.co</h3>
            <label className='checkbox-label'><input type='checkbox' className="checkbox" name="noticeBox" required/> I understand that I will be redirected</label>
            </div>
            
            <button type="submit" className='btn btn-primary contact-submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactPopup