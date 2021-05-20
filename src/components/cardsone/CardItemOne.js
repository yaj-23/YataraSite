import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item-one'>
        <a className='cards__item__link-one' href={props.href}>
          <figure className='cards__item__pic-wrap-one'>
            <img
              className='cards__item__img-one'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info-one'>
            <h2 className='cards__item__header-one'>{props.header}</h2>
            <h2 className='cards__item__text-one'>{props.text}</h2>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;