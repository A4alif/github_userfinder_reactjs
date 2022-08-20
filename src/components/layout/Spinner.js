import React from 'react'
import spinner from '../../assets/spinner.gif'
const Spinner = () => {
  return (
    <>
      <div className='w-100 mt-20'>
        <img src={spinner} alt="" className='text-center mx-auto' />
      </div>
    </>
  )
}

export default Spinner