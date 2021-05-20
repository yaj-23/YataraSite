import React from 'react';
import './Contact.css';
import {FaLinkedin, FaInstagram, FaFacebookMessenger,FaGithub} from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className='contact-container' id='contact'>
                <h1 className='contact-header'>
                    Contact Me
                </h1>

                <p className="sent">Hit Me Up @</p> 
                <div className="icons">
                    <a href="https://www.linkedin.com/in/yajurva-trivedi/"><FaLinkedin className='linkedin'/></a>
                    <a href="https://www.instagram.com/tri_yajurva/"><FaInstagram className='insta'/></a>
                    <a href="https://www.facebook.com/yajurva.trivedi.5"><FaFacebookMessenger className='messenger'/></a>
                    <a href="https://github.com/yaj-23"><FaGithub className='git'/></a>
                </div>

            </div>
        </>
    )
}

export default Contact
