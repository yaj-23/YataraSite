import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import logo from '../images/yatara.svg';
import menubar from '../images/bars.svg';
import menux from '../images/times.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import "./Navbar.css";


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



export default function Navbar() {
    
    const [click, setClick] = useState(false); /* Menu Toggle for Mobile Function*/
    const handleClick = () => setClick(!click);

    const {width } = useWindowDimensions();


    
    return (
        <>
            <div className='navbar'> {/* This is the entire Navbar Component*/}
                
                <div className="navbar-container container"> {/* This is the Navbar Component Divisions like Logo and Links*/}
                    
                    <Link to='home' className='navbar-logo' duration={800} smooth={true}>{/* This is the Logo Component, imports sourse from images*/}
                        <img className='logo'src={logo}  alt=""/>
                    </Link>

                    <div className='menu-icon' onClick ={handleClick}> {/* This checks if its clicked, if yea, change to closed, if not keep displaying bars*/}
                        {click ? <img src={menux} alt=""/> : <img src={menubar} alt=""/>}
                    </div>
                
                </div>

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}> {/* If menu is active, show css for that, otherwise remain the normal css for menu items*/}

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='about' className='nav-links' duration={800} smooth={true} onClick ={handleClick}>
                            about
                        </Link>
                    </li>


                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='portfolio' className='nav-links' duration={800} smooth={true}onClick ={handleClick}>
                            portfolio
                        </Link>
                    </li>

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='contact' className='nav-links' duration={800} smooth={true}onClick ={handleClick}>
                            contact
                        </Link>
                    </li>

                    <li className='nav-social-item'>
                        <a href="https://www.facebook.com/Yatara-Design-102095748764219">
                            <img src={facebook} alt="yatara"/>    
                        </a>
                        
                    </li>

                    <li className='nav-social-item'>
                        <a href="https://www.instagram.com/yataradesigns/">
                            <img src={instagram} alt="yatara"/>
                        </a>
                        
                    </li>
                    <li className='nav-social-item'>
                        <a href="https://www.linkedin.com/company/yatara-designs/">
                            <img src={linkedin} alt="yatara"/>
                        </a>
                        
                    </li>
               
               
                </ul>
                

            </div>
        </>
    )
}
