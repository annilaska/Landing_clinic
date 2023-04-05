import React from 'react'
import './Footer.scss'
import Navigation from '../navigation/Navigation'
import instagramBtn from '../../assets/instagramBtn.svg'
import whatsappBtn from '../../assets/whatsappBtn.svg'
import telegramBtn from '../../assets/telegramBtn.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className="logo">LOGO</div>
        <div className='navWrapper'>
          <Navigation />
        </div>
        <div className="socialBtns">
          <button className="socialBtn"><img className='socialIcon' src={instagramBtn} alt='instagramBtn' /></button>
          <button className="socialBtn"><img className='socialIcon' src={whatsappBtn} alt='whatsappBtn' /></button>
          <button className="socialBtn"><img className='socialIcon' src={telegramBtn} alt='telegramBtn' /></button>
        </div>
      </div>
    </div>
  )
}

export default Footer