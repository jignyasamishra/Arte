import React from 'react'
import logo from '../Photos/arte.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Socials from './Socials';

export default function Contact() {
  return (
    <div>


      <div className="contact">
        <img src={logo} style={{ height: "90px", position: "relative", top: "55px", left: "72px" }} alt="" />
        <div className='logoname' style={{ position: "relative", right: "-85px", top: "55px", width: "5%", fontFamily: "OrpheusPro", color: "#AA8B56", fontSize: "30px" }}>
          Arte
        </div>

        <div className="newsletter" style={{ color: "#AA8B56", position: "relative", right: "-1292px", top: "-67px", width: "260px", fontFamily: "OrpheusPro", fontSize: "10px" }}>
          <div>
            <h2>
              SUBSCRIBE TO THE NEWSLETTER
            </h2>
          </div>
          <div style={{ display: "flex", width: "268px" }}>

            <input className='input' placeholder='Your e-mail' type="email" />
            <AiOutlineArrowRight style={{ fontSize: "15px", position: "relative", right: "12px" }} />

          </div>

        </div>
        <div className="about">
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <Socials/>


        </div>


      </div>




    </div>




  )
}
