import React from 'react'
const About = () => {
  return (
    <>
    <h1 className='text-6xl mb-4'>Gitbub Finder App</h1>
    <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details
        <strong>
          <a  href='https://www.linkedin.com/in/alifhasanshah/'> by Alif Hasan Shah</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By : 
        <a  href="https://www.linkedin.com/in/alifhasanshah/" className='text-white font-bold pl-3'>Alif Hasan Shah</a>
      </p>
    </>
  )
}

export default About