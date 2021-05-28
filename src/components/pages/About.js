import React ,  { useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './About.css';
import {Button} from '../Button.js';
import aboutSvg from '../images/about.svg';


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




function About() {

    const {width } = useWindowDimensions();

    return (
        <>
            <div className="about-container" id='about'>

                <div className="left">
                    <h1 className='about-header'>
                        About us.
                    </h1>

                    <p1 className="about-content">
                        At Yatara we don’t create a website, we do more than that. Our goal is to deliver the best image of your business to the web.  Our dev team ensures all desgins are user-friendly, elegant and align with client needs.
                    </p1>

                    <h2 className="about-signature">
                        Yajurva Trivedi
                    </h2>

                    <p1 className="about-titles">
                        Founder & Developer at <b>YATARA DESIGNS    </b>
                    </p1>

                    <Link to='portfolio'  className='button-two' duration={800} smooth={true}>
                        <Button className="btn2"
                            buttonStyle='btn-primary' 
                            buttonSize = 'btn-medium'
                            buttonColor='light'>
                                portfolio
                        </Button>
                    </Link>

                </div>

                <div className="right">
                    <img  className="herosvg-image" alt="yatara"src={aboutSvg} width={width*0.4}/>

                </div>
                
            
            </div>



        </>
    )
}
export default About
