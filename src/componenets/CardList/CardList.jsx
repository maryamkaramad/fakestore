import React from 'react'
import Container from '../container/Container'
import './cardlist-style.scss'
import { Link } from 'react-router-dom';
const CardList = ({children,title,href}) => {
  return (
    
    <div className='CardList'>
<Container>
        <div className='cardlist__header'>
            <h2>{title}</h2>
            <Link to={href}>{'مشاهده ی همه'}</Link>
        </div>
        <div className='cardlist__content'>
        {children}</div>
        </Container> </div>
  )
}

export default CardList