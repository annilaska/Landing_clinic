import React from 'react'
import './Main.scss'
import Button from '../button/Button'
import image from '../../assets/Rectangle.png'
import arrow from '../../assets/arrow.svg'

const Main = ({ setFormVisible }) => {
  return (
    <div className='main'>
      <section className="main__section-top">
        <div className="blockContent">
          <div className='mobileImageWrapper'/>
          <div className="text">
            <h1 className='h1'>Многопрофильная клиника для детей и взрослых</h1>
            <h3 className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
          </div>
          <img className='rectangle' src={image} alt="image" />
          <div className='overlay'/>
        </div>
      </section>
      <section className="main__section-bottom">
        <div className='textContent'>
          <div className="bottom_text">
            <h1 className='title'>Check-UP</h1>
            <h2 className='h2'>для мужчин</h2>
            <ul>
              <li className='list'><span>Гормональный скрининг</span></li>
              <li className='list'><span>Тестостерон</span></li>
              <li className='list'><span>Свободный тестостерон</span></li>
              <li className='list'><span>Глобулин, связывающий половые гормоны</span></li>
            </ul>
            <div className='price'>
              <span className='first'>Всего 2800₽</span>
              <span className='second'>3500₽</span>
            </div>
          </div>
          <div className="buttons">
            <Button
              onClick={() => setFormVisible(true)}
              margin="0 1rem 0 0"
              border="none"
              color='#FFFFFF'
              backgroundColor="#0DBC91"
              name='Записаться'
            />
            <Button
              margin="0"
              border="#0DBC91 solid 1px"
              color='#0DBC91'
              backgroundColor="#FFFFFF"
              name='Подробнее'
            />
          </div>
        </div>
        <div className='arrows'>
          <button className='arrowBtn'><img className='leftArrow' src={arrow} alt="left arrow" /></button>
          <div className='pageNumbers'>1<span className='counter'>/4</span></div>
          <button className='arrowBtn'><img className='rightArrow' src={arrow} alt="right arrow" /></button>
        </div>
      </section>
    </div>
  )
}

export default Main