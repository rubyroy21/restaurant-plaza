import React from 'react'
import { Link } from "react-router-dom"

const CafeCard=({id,title,imageUrl,price,reviews,categories})=> {
  return (
      <Link to={`/Cafedetailspage/${id}`}>
         <div className='cafeCard'>
             <img src={imageUrl} alt="" width="100%" height="40%" />
             <h2 className='title'>{title}</h2>
             <p className='price'>
                 {price}
             </p>
             <p>{reviews}</p>
             <p>{categories}</p>
             {/* <p>{payment_methods}</p> */}
         </div>
      </Link>
    
  )
}

export default CafeCard