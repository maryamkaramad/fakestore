import React from 'react'
import './card-style.scss'
import Button from '../button/Button'


const Card = ({image,name,price,onClick}) => {
  return (
    <div className='Card'>
        <img  className='Card__image' src={image} alt="" />
        <h2 className='Card__title'>{name}</h2>
        <p className='Card__price' >{ ` تومان ${price}`}</p>
        <div className='Card__btn'> <Button onclick={onClick}>خرید</Button></div>
     
    </div>
  )
}

export default Card