import React from 'react'
import './Button.scss'

const Button = ({ onClick, margin, border, color, backgroundColor, name}) => {
  return (
    <button 
      onClick={onClick}
      className='button' 
      style={{margin: margin, border: border, color: color, backgroundColor: backgroundColor}}
    >{name}</button>
  )
}

export default Button