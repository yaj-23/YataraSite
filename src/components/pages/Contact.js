import React ,  { useState, useEffect}
from 'react';
import './Contact.css';
import {Button} from '../Button.js';
import contact from '../images/contact.svg';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}




function Contact() {
    const {width } = useWindowDimensions();

    return (
        <>
            <div className='contact-container' id='contact'>
                <div className='top'>
                    <div className='contact-left'>
                        <h2 className='contact-header'>Contact us.</h2>
                        <p1 className='contact-desc'>email us directly at:</p1>
                        <p1 className='contact-email'>yataradesigns@gmail.com</p1>
                        <div className='email-btn'>

                            <a href='mailto: yataradesigns@gmail.com'>
                                <Button className="email-btn"
                                    buttonStyle='btn-primary' 
                                    buttonSize = 'btn-medium'
                                    buttonColor='light'>
                                        email here
                                </Button>
                            </a>
                            
                        </div>
                        
                    </div>

                    <div className='contact-right'> 
                         <img  className="herosvg-image" alt="yatara"src={contact} width={width*0.20}/>

                    </div>

                </div>


                

            </div>
        </>
    )
}

export default Contact
