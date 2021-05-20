import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
      <div className='cards' id='experience'>
        <h1 className="cards_header">Experience</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src='images/Frame4.png'
                    header='Yatara Designs'
                    text='Founded Yatara Designs, a web-dev agencey which design and develop complete, responsive websites. We take care of hosting services, professional logo creation.'
                    href='http://yataradesigns.com/'

                />

                <CardItem
                    src='images/Frame5.png'
                    header='REC Junior Design'
                    text='Competed in team of 4 at Ryerson Universities Biggest Engineering competition for Junior Design Challenge in 2020, where we placed 1st  for our Smart Bus Design.'
                    desc='Founded Yatara Designs, a web-dev agencey which design'
                    href='https://smartbus.vercel.app/'

                />
                <CardItem
                    src='images/Frame6.png'
                    header='Cash & Cell Mart'
                    text='Designed a responsive, modern, website using strong sense of WordPress Design, and created a Digital Image. Provided excellent service on a day-to-day basis.'
                    desc='Founded Yatara Designs, a web-dev agencey which design'
                    href='https://cashandcell.com/'

                />
            


             
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;