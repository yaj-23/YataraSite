import React, {useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../images/yatara.svg';
import menubar from '../images/Hamburger_Menu.png';
import menux from '../images/Hamburger_Close.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import "./Navbar.css";






export default function Navbar() {
    
    const [click, setClick] = useState(false); /* Menu Toggle for Mobile Function*/
    const handleClick = () => setClick(!click);

    const[navbar, setNavbar] = useState(false);

    const changeBG = () => {
        if(window.scrollY >=80) {
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBG); 

    
    return (
        <>
            <div className={navbar ? 'navbar active' : 'navbar'}> {/* This is the entire Navbar Component*/}
                
                <div className="navbar-container container"> {/* This is the Navbar Component Divisions like Logo and Links*/}
                    
                    <Link to='home' className='navbar-logo' duration={800} smooth={true}>{/* This is the Logo Component, imports sourse from images*/}
                        <img src={logo} alt=""/>
                    </Link>

                    <div className='menu-icon' onClick ={handleClick}> {/* This checks if its clicked, if yea, change to closed, if not keep displaying bars*/}
                        {click ? <img src={menux} alt=""/> : <img src={menubar} alt=""/>}
                    </div>
                
                </div>

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}> {/* If menu is active, show css for that, otherwise remain the normal css for menu items*/}

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='about' className='nav-links' duration={800} smooth={true}>
                            about
                        </Link>
                    </li>


                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='projects' className='nav-links' duration={800} smooth={true}>
                            portfolio
                        </Link>
                    </li>

                    <li className='nav-item'> {/*  So basically ythis is the links, css is done for all those wjho are not clicked*/}
                        <Link to='contact' className='nav-links' duration={800} smooth={true}>
                            contact
                        </Link>
                    </li>

                    <li className='nav-social-item'>
                        <a href="https://www.linkedin.com/company/yatara-designs/">
                            <img src={facebook} alt=""/>    
                        </a>
                        
                    </li>

                    <li className='nav-social-item'>
                        <a href="https://www.linkedin.com/company/yatara-designs/">
                            <img src={instagram} alt=""/>
                        </a>
                        
                    </li>
                    <li className='nav-social-item'>
                        <a href="https://www.linkedin.com/company/yatara-designs/">
                            <img src={linkedin} alt=""/>
                        </a>
                        
                    </li>
               
               
                </ul>
                

            </div>
        </>
    )
}
