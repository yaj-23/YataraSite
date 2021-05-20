import React from 'react'
import CardItem from './CardItemOne';
import './CardsOne.css'

function CardsOne() {
    return (
      <div className='cards-one' id='projects'>
        <h1 className="cards_header-one">Projects</h1>
        <div className='cards__container-one'>
          <div className='cards__wrapper-one'>
            <ul className='cards__items-one'>
                <CardItem
                    src='images/Frame1.png'
                    header='Personal React Website'
                    text='Using React JS, HTML and CSS, created this completely responsive website.'
                    href='https://github.com/yaj-23/personal-site'

                />

                <CardItem
                    src='images/Frame2.png'
                    header='REC Project Website'
                    text='Using React JS created this website for Smart Bus Design which won 1st place for Juniour Design '
                    desc='Founded Yatara Designs, a web-dev agencey which design'
                    href='https://github.com/yaj-23/REC_2020_BUS_WebSite'

                />
                <CardItem
                    src='images/Frame3.png'
                    header='Xplor To'
                    text='Using Android Studio Framework, I created a Restaurant/Food Shop Guide Application made in Java, XML framework, Firebase Console.'
                    desc='Founded Yatara Designs, a web-dev agencey which design'
                    href='https://github.com/yaj-23/XplorToronto'

                />
            


             
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardsOne;