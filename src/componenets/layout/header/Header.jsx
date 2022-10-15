import React from 'react'
import Container from '../../container/Container'
import './Header-style.scss'
import {ReactComponent as ArrowLeft} from '../../../assets/svg/ArrowLeft.svg';
import IconButton from '../../IconButton/IconButton'
import ps from '../../../assets/images/ps.jpg'
import phone from '../../../assets/images/phone.jpg'
import daste from '../../../assets/images/daste.jpg'
const Header = () => {
  return (
   <  header className='header'>
    <Container>
      <div className='header__content' >
<div className='header__content-right'>
  <h1>{"معرفی سایت با جملات شعاری و تقریبا تو سه خط یا چهار خط بر اساس سایز"}</h1>
  <p>{"مطلبی درمورد سیاست های سایت یا تبلیغات با جمله ای با دو هدف بالا"}</p>
  <div className='categories'><a href="/categories">{"دسته بندی محصولات"}</a> <a href="/categories"><IconButton><ArrowLeft/></IconButton></a></div>
</div>
<div><img width={400} height={484} src={ps} alt="ps" className='img__ps'/></div>
<div>
<div><img width={250} height={240} src={daste} alt="daste"/></div>
<div><img width={250} height={240}  src={phone} alt="phone"/></div>

</div>

      </div>
    </Container>
   </header>
  )
}

export default Header