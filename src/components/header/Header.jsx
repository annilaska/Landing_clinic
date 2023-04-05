import React, { useState } from 'react'
import './Header.scss'
import whatsup from '../../assets/whatsapp.svg'
import placeholder from '../../assets/placeholder.svg'
import Navigation from '../navigation/Navigation'
import Button from '../button/Button'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const Header = ({ setFormVisible }) => {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <div className='header'>
            <div className='header__section-top'>
                <div className='left'>
                    <button onClick={() => setMenuVisible(!menuVisible)} className='menuBtn'><img className='menuIcon' src={menuVisible ? close : menu} alt="menu" /></button>
                    <div className="logo">LOGO</div>
                    <div className="location">
                        <img className="placeholder" src={placeholder} alt="placeholder" />
                        <div className='adress'>
                            <span className='adress_top'>Ростов-на-Дону</span>
                            <span className='adress_bottom'>ул. Ленина, 2Б</span>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className="contact">
                        <img className='whatsup' src={whatsup} alt='whatsup' />
                        <div className='phone'>+7(863) 000 00 00</div>
                        <span className='town'>Ростов-на-Дону</span>
                    </div>
                    <Button 
                        onClick={() => setFormVisible(true)}
                        margin="0 1rem 0 2rem"
                        border="none" 
                        color='#FFFFFF' 
                        backgroundColor="#0DBC91" 
                        name='Запись на приём' 
                    />
                </div>
            </div>
            <div className='header__section-nav'>
                <div className='navWrapper'>
                    <Navigation />
                </div>
            </div>
            {
               menuVisible === true && <div className='overlay'>
                <Navigation />
                <Button
                    onClick={() => setFormVisible(true)}
                    margin="0 1.5rem"
                    border="#0DBC91 solid 1px"
                    color='#0DBC91'
                    backgroundColor="#FFFFFF"
                    name='Запись на приём'
                />
               </div>
            }
        </div>
    )
}

export default Header