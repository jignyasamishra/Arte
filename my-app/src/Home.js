import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Socials from './Components/Socials'
// import Timeline from './Components/Timeline'
import Vintageart from './Components/Vintageart'

import { TypeAnimation } from 'react-type-animation';
import Contact from './Components/Contact'
import Loading from './Components/Loading'


export default function Home() {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => setloading(false), 8000)
  }, [])
    return (
       <>
      
             {
              loading===false?(
                <div> 
            <Navbar />
         
            
            <div className="home">
                <div className="homebg">
                    <img src="https://i.ytimg.com/vi/SVPSGi2kC3k/maxresdefault.jpg" alt="Can't Load Image" id='jesus' />
                    <div className="homebgcontent">
                    <TypeAnimation speed={20}
      sequence={[
    //    "ART IS IMMORTAL", // Types 'One'
        // 1000, // Waits 1s
        // "HUMANITY WANTED IMMORTALITY", // Deletes 'One' and types 'Two'
        // 2000, // Waits 2s
        "HUMANITY BEGAN WITH ART", // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
      repeat={0}
      style={{fontWeight:'600', fontSize: '100px' ,width:'1142px',position:'relative',left:'-100px'}}
    />
                    
                    </div>
                </div>

            </div>
          <div className="timelinehead"> 
                A Walk Through Time
                <p id='contentone'>
                    What is ART? The dictionary defination of art says that it is "the conscious use of skill and creative imagination
                    especially in the production of aesthetic objects"
                </p>
                <p id='contenttwo'>
                But the thing about art is that it’s so diverse that there are as many ways to understand it as there are people. That’s why there are scholars who give their own special definition of the word, such the one penned by this famous Russian novelist, which goes:“Art is the activity by which a person, having experienced an emotion, intentionally transmits it to others” – Leo Tolstoy
                </p>
                <p id='contentthree'>
                Art is uniquely positioned to move people—inspiring us, inciting new questions and provoking curiosity, excitement, and outrage.

                </p>
         
              
            </div>
         
             <div className="timeline">   
          
          
           
             <Vintageart/>
     
             </div> 
      <div>
               
      <Contact/>
      </div>
      </div>
              ):(<Loading/>)
           
             }
           
          
                </>

             
    )
}
