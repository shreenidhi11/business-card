import React from 'react'
import img from "../assets/pic.jpeg";

const Image = () => {
  return (
        <div className='image'>
        <img className='imgprops' src={img} />
        </div>
  )
}

export default Image