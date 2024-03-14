import React from 'react'
import '../styles/hero.css'
import logo from '../images/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BiLogoPlayStore} from 'react-icons/bi'
import {IoLogoAppleAppstore} from 'react-icons/io5'

export default function hero() {
  return (
    <div id="header">
  <div className="container">
    <nav>
      <img src={logo} className="logo" />
      <ul>
        <li>
          <a href="#">Company</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Customers</a>
        </li>
        <a href="" target="_blank">
          <AiOutlineShoppingCart className='cart-icon'/>
        </a>
      </ul>
    </nav>
    <div className="header-text">
      <h1>
        Have you <span>Eaten</span>
        <br />?
      </h1>
      <button type="download" className="btn btn2">
        <BiLogoPlayStore />
        Download from Google Play
      </button>
      <button type="download" className="btn btn2">
        <IoLogoAppleAppstore />
        Download from Apple Store
      </button>
    </div>
  </div>
</div>

  )
}
