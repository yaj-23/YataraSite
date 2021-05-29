import React ,  { useState, useEffect}
from 'react';
import './Contact.css';
import {Button} from '../Button.js';
import contact from '../images/contact.svg';
import linkedin from '../images/linkedin.svg';

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
                         <img  className="herosvg-image" alt="yatara"src={contact} width={width*0.6}/>

                    </div>

                </div>


                <div className='bottom'>
                    <div className='team-header'>
                        <h2 className='contact-header'>Meet us.</h2>
                    </div>

                    <div className='team-container'>
                        <div className='member'>
                            <p1 className='member-name'>Yajurva Trivedi</p1>
                            <p1 className='member-position'>Founder/Developer</p1>
                            <a href='https://www.linkedin.com/in/yajurva-trivedi/'>
                                <img className='member-linkedin'src={linkedin} alt=""/>       
                             </a>
                            
                        </div>
                        <div className='member'>

                            <p1 className='member-name'>Virag Mehta</p1>
                            <p1 className='member-position'>Team Lead</p1>
                            <a href='https://www.linkedin.com/in/virag-mehta/'>
                                <img className='member-linkedin'src={linkedin} alt=""/>       
                             </a>
                            
                        </div>
                        <div className='member'>
                            <p1 className='member-name'>Ashik Hussain</p1>
                            <p1 className='member-position'>Accounts Manager</p1>
                            <a href='https://www.linkedin.com/in/ashik-hussain-b7166b144/'>
                                <img className='member-linkedin'src={linkedin} alt=""/>       
                             </a>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
