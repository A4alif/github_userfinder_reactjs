import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = ({title}) => {
  return (
    <>
      <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <FaGithub className="inline pr-2 text-3xl"/>
            <Link to={'/'} className="text-lg font-bold" >
              {title}
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
              <Link to={"/"} className="btn btn-outline btn-success btn-sm rounded-btn mr-4" >
                Home
              </Link>
              <Link to={"/about"} className="btn btn-outline btn-success btn-sm rounded-btn" >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar