import React,  { useState, useEffect }  from 'react';
import {Link} from 'react-scroll';
import './Hero.css';
import {Button} from '../Button.js';
import heroSvg from '../images/hero.svg';
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


function Hero() {
    const {width } = useWindowDimensions();

    return (
        <>
            <div className='hero-container' id='home'>
                    <div className="content-container">
                            <div className="svg-container">
                                <img  className="herosvg-image" alt="yatara"src={heroSvg} width={width*0.7}/>
                            </div>
                            <div className="text-container">
                                    <h3 className="text1"> BRING YOUR IDEAS</h3>
                                    <h3 className="text2">TO</h3>
                                    <h1 className="text3">LIFE</h1>

                                    <div className="btns-hero">
                                      <Link to='contact'  className='button-two' duration={800} smooth={true}>
                                        <Button className="btn1"
                                            buttonStyle='btn-primary' 
                                            buttonSize = 'btn-medium'
                                            buttonColor='dark'>
                                                contact us
                                        </Button>
                                      </Link>
                                      
                                      <Link to='portfolio'  className='button-two' duration={800} smooth={true}>
                                        <Button className="btn1"
                                            buttonStyle='btn-primary' 
                                            buttonSize = 'btn-medium'
                                            buttonColor='light'>
                                                portfolio
                                        </Button>
                                      </Link>
                                    </div>
                                
                            </div>
                    </div>
            </div>            
        </>
    )
}

export default Hero
