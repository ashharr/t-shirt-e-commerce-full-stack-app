import React from 'react'
import { AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        BARRACKS CLOTHING ® 2022 ALL RIGHTS RESERVED
      </p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineWhatsApp/>
      </p>
    </div>
  )
}

export default Footer
