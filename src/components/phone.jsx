import React from 'react'
import phoneImg from '../images/phoneImg.png'
import '../styles/phone.css'

export default function Phone
() {
  return (
    <div className='flex-col-container'>
        <br />
        <h1>TRY OUR APP!!</h1>
        <p className='below-text'>Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
        <img src={phoneImg} alt="" style={{marginBottom:'80px'}} />
    </div>
  )
}
