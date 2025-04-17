import React from 'react'
import "./contact.css"
import Seperator from "../../common/seperator"
import SocialContact from "../../common/social-contact"
import  Resume from '../../../Assets/Rahul_KR_Resume.pdf'

function Contact() {
    return (
        <div className="contact">
            <Seperator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>want to get in touch? Contact me on any of the platform</p>
                    <SocialContact/>
                </div>
                <div className="download">
                <a download href={Resume}>
                    <i class="fi-rr-cloud-download download-icon"/>
                    Download Resume
                    </a>
                    </div>
            </div>
        </div>
    )
}

export default Contact
