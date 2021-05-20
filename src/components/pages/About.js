import React, {useEffect, useRef}from 'react';
import {Link} from 'react-scroll';
import './About.css';
import lottie from 'lottie-web';
import {Button} from '../Button.js';





function About() {

    const animone = useRef(null)


    useEffect(() =>{
        lottie.loadAnimation({
            container : animone.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData: require('../lottiefiles/about.json')
        })
    }, [] )

    return (
        <>
            <div className="about-container" id='about'>
                <h1 className='header'>
                    About Me
                </h1>
                <div className='cont'>
                    <p1 className="para-first">Hey everyone, I am Yajurva Trivedi, a Computer Engineering student in my second year at Ryerson University. 
                    I am an aspiring software enthusiast and always a sucker getting exposed to new technologies.I enjoy cooking and making recipes by experimenting with cuisines from around the world. 
                    For those who know me, I enjoy watching anime , and of course the NBA. I enjoy playing basketball, competing in fantasy leagues despite the questionable drafts and pickups.
                    </p1>

                    
                </div>  
                
                <div className='buttons'>
                    <Link to='contact'  className='button-about' duration={800} smooth={true}>           
                        <Button buttonStyle='btn-primary' buttonColor='about' buttonSize='btn-medium'>
                            Contact Me
                        </Button>
                    </Link>
                </div>
                
                <h3 className="about_skills">Proficient In</h3>

                <div className='skills_container'>
                        <Button classname='but' buttonStyle='btn-primary' buttonColor='skill' buttonSize='btn-medium'>
                            React / JS
                        </Button>

                        <Button buttonStyle='btn-primary' buttonColor='skill' buttonSize='btn-medium'>
                            Java
                        </Button>

                        <Button buttonStyle='btn-primary' buttonColor='skill' buttonSize='btn-medium'>
                            Android Studio / XML
                        </Button>

                        <Button buttonStyle='btn-primary' buttonColor='skill' buttonSize='btn-medium'>
                            Python
                        </Button>

                        <Button buttonStyle='btn-primary' buttonColor='skill' buttonSize='btn-medium'>
                            C
                        </Button>
                </div>
                
            
            </div>



        </>
    )
}
export default About
