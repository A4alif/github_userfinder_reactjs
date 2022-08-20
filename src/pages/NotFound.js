import React from 'react'
import image_notfound from '../assets/image_notfound.jpg'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='notfound' >
      <div className="notfound_img w-6/12 mx-auto">
       <img src={image_notfound} alt=""  />
      </div>
      <div className="go_home flex justify-center">
      <Link className='btn btn-primary mt-11' to={"/"}> Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound