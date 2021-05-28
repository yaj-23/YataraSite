import React ,  { useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Button} from '../Button.js';
import Carousel from 'react-elastic-carousel';
import './Portfolio.css';
import Item from './Item.js';
import Laptop1 from '../images/Laptop.svg';
import Laptop2 from '../images/Laptop2.svg';
import Laptop3 from '../images/Laptop3.svg';
import Laptop4 from '../images/Laptop4.svg';


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


const breakPoints = [
  {width: 1, itemsToShow:1},
  {width:768, itemsToShow:2},
  {width: 1200, itemsToShow:3},
];

function Portfolio() {
    const {width } = useWindowDimensions();
    return (
        <>
           <div classId='portfolio'className="portfolio-container">
                <h1 className='portfolio-header'>
                    Portfolio.
                </h1>

                <p1 className="portfolio-content">
                    click on screen to visit site.
                </p1>

                <Carousel className="carousel-portfolio" breakPoints={breakPoints} enableSwipe={true} enableTilt={true}  showArrows={false}>
                    <Item>
                      <a href="https://dpfinancial.ca/">
                        <img  className="portfoliosvg-image" alt="yatara"src={Laptop1} width={width*0.3}/>
                      </a>
                    </Item>
                    <Item>
                      <a href="https://execsecuritysystems.com/">
                        <img  className="portfoliosvg-image" alt="yatara"src={Laptop2} width={width*0.3}/>
                      </a>
                    </Item>
                    <Item>
                      <a href="https://canadianccad.com/">
                        <img  className="portfoliosvg-image" alt="yatara"src={Laptop3} width={width*0.3}/>
                      </a>
                    </Item>
                    <Item>
                      <a href="https://pccment.com/">
                        <img  className="portfoliosvg-image" alt="yatara"src={Laptop4} width={width*0.3}/>
                      </a>
                    </Item>

                </Carousel>
                
                <div className="btns-portfolio">
                    <Link to='portfolio'  className='button-two' duration={800} smooth={true}>
                      <Button className="btn2"
                          buttonStyle='btn-primary' 
                          buttonSize = 'btn-medium'
                          buttonColor='dark'>
                              contact us
                      </Button>
                    </Link>

                    <Link to='portfolio'  className='button-two' duration={800} smooth={true}>
                      <Button className="btn2"
                          buttonStyle='btn-primary' 
                          buttonSize = 'btn-medium'
                          buttonColor='light'>
                              view team
                      </Button>
                    </Link>
                </div>
                

                


           </div>     
        </>
    )
}

export default Portfolio