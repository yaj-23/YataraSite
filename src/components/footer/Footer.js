import React,  { useState, useEffect} from 'react'
import './Footer.css';
import {Link} from 'react-scroll';
import Logo2 from '../images/Logo2.svg';


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


function Footer() {
    
    
    
    const {width } = useWindowDimensions();

    return (
        <div className="footer">
            <div className='footer-left'>
                <img className='footer-logo' src={Logo2} alt='logo-yatara' width={width*0.15}/>
                <p1 className='footer-desc'>Our goal is to deliver the best image of your business to the web.</p1>
                
            </div>

            <div className='footer-columns'>
                <div className='column'>
                    <p1 className='column-header'>coming soon.</p1>
                    <Link to='projects'  duration={800} smooth={true}>
                        <p1 className='links'>projects</p1>
                    </Link>
                    <Link to='projects'  duration={800} smooth={true}>
                        <p1 className='links'>ux/ui designs</p1>
                    </Link>
                    <Link to='projects'  duration={800} smooth={true}>
                        <p1 className='links'>mockups</p1>
                    </Link>

                </div>
            </div>
            
            <div className='footer-columns'>
                <div className='column'>
                    <p1 className='column-header'>pages.</p1>
                    <Link to='about'  duration={800} smooth={true}>
                        <p1 className='links'>about</p1>
                    </Link>
                    <Link to='contact'  duration={800} smooth={true}>
                        <p1 className='links'>meet the team</p1>
                    </Link>
                    <Link to='portfolio'  duration={800} smooth={true}>
                        <p1 className='links'>portfolio</p1>
                    </Link>
                    <Link to='home'  duration={800} smooth={true}>
                        <p1 className='links'>home</p1>
                    </Link>
                </div>
            </div>

            <div className='footer-columns'>
                <div className='column'>
                    <p1 className='column-header'>socials.</p1>
                    <a href='https://www.linkedin.com/company/yatara-designs/'>
                        <p1 className='links'>facebook</p1>
                    </a>
                    
                    <a href='https://www.linkedin.com/company/yatara-designs/'>
                        <p1 className='links'>linkedin</p1>
                    </a>
                    <a href='https://www.linkedin.com/company/yatara-designs/'>
                        <p1 className='links'>instagram</p1>
                    </a>
                  


                </div>
            </div>


        </div>
    )
}

export default Footer
