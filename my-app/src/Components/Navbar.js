
import { slide as Menu } from 'react-burger-menu'
import { SiMaterialdesignicons } from 'react-icons/si';
import { TfiBrush } from 'react-icons/tfi';
import menu from '../Photos/menuicon5.png'
import logo from '../Photos/arte.png'
import navside1 from '../Photos/navside1.png'
import navside2 from '../Photos/navside2.png'
import navside3 from '../Photos/navside3.png'
import navside4 from '../Photos/navside4.png'
import { useState } from 'react';

export default function Navbar() {
 
//   const[visible,showmenu]=useState("none")
//   let mousein=function(){
//     showmenu("block")
//   }
// let mouseout=function(){
//   showmenu("none")
// }

  return (
    <div>
      <Menu customBurgerIcon={ 
         <div  id='menubutton'>
    <img   src={menu} alt="" />
    <div></div>

         </div> 
   
   
      }> 
    <img style={{position:"relative",bottom:"10px",right:"10px"}} src={navside1} alt="" />
    <img style={{position:"relative",left:"220px",bottom:"40px"}} src={navside2} alt="" />
    <img style={{position:"relative",left:"220px",top:"630px"}} src={navside3} alt="" />
    <img style={{position:"relative",top:"600px"}} src={navside4} alt="" />
        <a id="about" className="menu-item" href="/" target="_blank"> <SiMaterialdesignicons className="navicon" /> History Of Art</a>
        <a id="contact" className="menu-item" href="/ModernArt" target="_blank"> <SiMaterialdesignicons className="navicon" />  Modern Art</a>
        <a id="contact" className="menu-item" href="/Architecture" target="_blank"> <SiMaterialdesignicons className="navicon" />Architecture Art</a>
     <a id='navlogo' style={{position:"relative",top:"150px",left:"60px",textDecoration:"none"}} href="/">

     </a>
      



      </Menu>
    </div>
  )
}
