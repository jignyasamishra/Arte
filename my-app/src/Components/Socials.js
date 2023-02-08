import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

export default function Socials() {
  return (
    <div>
      <div className="social">
        <li className='social-li'> <a href=""><FaFacebookF /></a> </li>
        <li className='social-li'> <a href=""><AiOutlineInstagram /></a> </li>
        <li className='social-li'> <a href=""><BsTwitter /></a> </li>
        <li className='social-li'> <a href=""><BsYoutube /></a> </li>
      </div>

    </div>
  )
}
