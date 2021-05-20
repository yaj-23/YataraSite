import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.href}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h2 className='cards__item__header'>{props.header}</h2>
            <h2 className='cards__item__text'>{props.text}</h2>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;