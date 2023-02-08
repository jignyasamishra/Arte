import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const buttonStyle = {
 
  background: 'none',
  border: '10px'
};
const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

export default function Morecontent() {


  const slideImages = [
    {
      quote: `"Architecture is a passion, a vocation, a calling — as well as a science and a business. 
      It has been described as a social art and also an artful science. Architecture must be of the highest quality of design. 
      Architecture provides, in the words of Marcus Vitruvius, the great Roman architect and historian,
      “firmness, commodity and delight" `,
      caption: `~ James Pochisnki`
    },
    {
      quote: `"Architecture is everywhere. Each and every building: home, school, office, hospital and supermarket were designed for their particular purpose. It is of vital importance that these buildings, and in turn the environments they form and the neighbourhoods and cities they are a part of,
       are designed to be the best possible buildings for their specific context, use and the people who use them."`,
      caption: `~ Mike Dunn`
    },
    {
      quote: `"Architecture is the art and science of designing buildings and other physical structures. A wider definition often includes the design of the total built environment from the macro level of town planning, urban design, and landscape architecture to the micro level of construction details and, sometimes, furniture.
       The term “Architecture” is also used for the profession of providing architectural services."`,
      caption: `~ Mikhael Silver`
    },
  ];

  return (


    <div>

      <div className="more">

        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div   className="each-slide" key={index}>
           
              <div >{slideImage.quote}
                </div>
                <div>
                  {slideImage.caption}

                </div>


             
                
             
            </div>
          ))}
        </Slide>

      </div>

    </div>
  )
}
