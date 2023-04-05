import React, { useState } from 'react'
import Button from '../button/Button'
import './Form.scss'

const Form = ({ setFormVisible }) => {

    const [user, setUser] = useState({})

    const handleSubmite = async (e) => {
        e.preventDefault()

        setFormVisible(false)
        let res = await fetch('sendMail.php', {
            method: 'POST',
            body: JSON.stringify({ user })
        })
    }

    return (
        <form onSubmit={(e) => handleSubmite(e)} className='form'>
            <button onClick={() => setFormVisible(false)} className='closeBtn'>&#10006;</button>
            <div className='formField'>
                <label className="lable" htmlFor='name'>Имя: </label>
                <input name='name' onChange={(e) => setUser({ ...user, name: e.target.value })} className="input" id="name" type="text" />
            </div>
            <div className='formField'>
                <label className="lable" htmlFor='phone'>Телефон: </label>
                <input name='phone' onChange={(e) => setUser({ ...user, phone: e.target.value })} className="input" id="phone" type="tel" />
            </div>
            <Button
                type='submit'
                margin="3rem 0 0 0"
                border="none"
                color='#0DBC91'
                backgroundColor="#FFFFFF"
                name='Отправить'
            />
        </form>
    )
}

export default Form