import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import Morecontent from './Morecontent'
import Loading from './Loading'
export default function Architecture() {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => setloading(false), 8000)
  }, [])



  let mousein1=function(){
      let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Taj_Mahal_2%2C_Agra%2C_India.jpg/800px-Taj_Mahal_2%2C_Agra%2C_India.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }

  let mousein2=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/09/1200/675/statue-of-liberty-1.jpg?ve=1&tl=1")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }

  let mousein3=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://i.insider.com/5d23697521a86105c77f25e8?width=1200&format=jpeg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
  
  let mousein4=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://res.cloudinary.com/dtpgi0zck/image/upload/s--AEi5Ocv---/c_fill,h_580,w_860/v1/EducationHub/photos/the-great-wall-of-china.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
  let mousein5=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
 

  let mousein6=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url(" https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
  let mousein7=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url(" https://cdn.hswstatic.com/gif/chichen-itza.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
  let mousein8=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/06/1.-Intrepid-Travel-peru_machupicchu.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
  let mousein9=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://images.pexels.com/photos/9977483/pexels-photo-9977483.jpeg?cs=srgb&dl=pexels-maxi-franzoi-9977483.jpg&fm=jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }
  let mousein10=function(){
    let a=document.getElementById("archpage")
    a.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/c/c1/Mount_Rushmore_National_Treasure.jpg")'
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    a.style.backgroundRepeat="no-repeat"
    a.style.backgroundSize="cover"

  }

  let mouseout=function(){
let a=document.getElementById("archpage")
a.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/8/80/Temple_walls_-_Jagdish_Temple%2C_Udaipur%2C_RJ.jpg")'
a.style.animationTimingFunction="ease-in-out"
a.style.transitionDuration="0.8s"
a.style.backgroundRepeat="no-repeat"
a.style.backgroundSize="cover"


  }
  return (
<>
{loading===false?(
      <div>

      <Navbar />
      
      <div className="archcontent">
      
      <div className="archoverlay">
      <p style={{margin:"50px 0px",color:"white",position:"absolute",
      left:"540px",top:"62px",fontSize:"40px",fontFamily:"OrpheusPro",fontWeight:"600"
      }}>
      WHAT IS ARCHITECTURE?
      </p>
      <p style={{margin:"50px 0px",color:"white",position:"absolute",left:"248px",
      top:"120px",fontSize:"25px",fontFamily:"OrpheusPro",fontWeight:"500",width:"1036px",padding:"15px"}}>
      
      Architecture is the art and technique of designing and building, 
      as distinguished from the skills associated with construction.
       It is both the process and the product of sketching, conceiving, planning, designing, and
        constructing buildings or other structures
      </p>
      <p style={{margin:"50px 0px",color:"white",position:"absolute",left:"248px",
      top:"250px",fontSize:"25px",fontFamily:"OrpheusPro",fontWeight:"500",width:"1036px",padding:"10px"}} >
      The practice, which began in the prehistoric era, has been used as a way of expressing culture for civilizations on all seven continents.
       For this reason, architecture is considered to be a form of art. Texts on architecture have been written since ancient times
      </p>
      </div>
      
      
            </div>
            <Morecontent/>
      
          
      
      
            <div className="arch" id='archpage'>
      
              <div className="overlay">
                <li> <a href="https://en.wikipedia.org/wiki/Taj_Mahal" onMouseEnter={mousein1} onMouseOut={mouseout} target="_blank">TAJ MAHAL</a> </li>
      
                <li> <a href="https://en.wikipedia.org/wiki/Statue_of_Liberty"   onMouseEnter={mousein2} onMouseOut={mouseout} target="_blank">STATUE OF LIBERTY</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"   onMouseEnter={mousein3} onMouseOut={mouseout}  target="_blank" >GIZA PYRAMIDS</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Great_Wall_of_China"   onMouseEnter={mousein4} onMouseOut={mouseout}  target="_blank" >GREAT WALL OF CHINA</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Petra"   onMouseEnter={mousein5} onMouseOut={mouseout}  target="_blank" >PETRA</a>  </li>
                <li>  <a href="https://en.wikipedia.org/wiki/Colosseum"   onMouseEnter={mousein6} onMouseOut={mouseout}  target="_blank" >COLOSSEUM</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Chichen_Itza"   onMouseEnter={mousein7} onMouseOut={mouseout}  target="_blank" >CHICHEN ITZA</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Machu_Picchu"   onMouseEnter={mousein8} onMouseOut={mouseout}  target="_blank" >MACHU PICCHU</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)"   onMouseEnter={mousein9} onMouseOut={mouseout}  target="_blank" >CHRIST THE REDEEMER</a> </li>
                <li> <a href="https://en.wikipedia.org/wiki/Mount_Rushmore"   onMouseEnter={mousein10} onMouseOut={mouseout}  target="_blank" >MOUNT RUSHMORE</a> </li>
              </div>
      
            </div>
      
      
          </div>
):(<Loading/>)}

</>



  )
}
