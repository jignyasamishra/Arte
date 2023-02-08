import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Loading from './Loading'

export default function Modern() {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => setloading(false), 8000)
  }, [])


  const [mydata, setdata] = useState([])
  useEffect(function () {
    axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=9RiQf3VQ&involvedMaker=Rembrandt+van+Rijn").then(function (res) {
      setdata(res.data.artObjects)
      console.log(res.data.artObjects)


    })

  }, [])

  return (
    <div>

  
     {loading===false ?(
      <div>
         <Navbar />
       <div className="modernart">
         <div className="modernartcontent">
           <h1 style={{ fontSize: "30px" }}>Modernization Of Art</h1>
           <p style={{ fontWeight: "500", fontSize: "22px" }}>
             Art has evolved through many ups and downs and has progressed leaps and bounds.
             Here we try to summarise a tiny portion of art that has modernised.
             Here we provide data from the the Rijksmuseum which is situated in Amsterdam,Netherlands.
             Using their API we provide you an insight into modern art.
           </p>
 
         </div>
         <div className="modern_one">
           {
             mydata.map(function (post) {
               const { links, webImage, title, principalOrFirstMaker, id } = post
               return (
                 <div className="api" key={id}>
                   <img id='modernimg' style={{ width: "500px" }} src={webImage.url} alt="" />
 
                   <div style={{
                     display: "flex", justifyContent: "center", position: "relative"
                     , right: "70px", fontSize: "25px"
                   }}>
                     {title}
                   </div>
 
 
 
                 </div>
 
               )
 
             })
           }
         </div>
 
 
       </div>
      </div>
     ):(<Loading/>)}
   </div>
  )
}
