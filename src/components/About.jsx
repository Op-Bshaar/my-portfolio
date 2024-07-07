import React from 'react'
import { About_me } from '../constants'

const About = () => {
  return (

    <div className='border-b border-neutral-800'>
    <div className='py-6 px-4 sm:px-8 lg:px-16'>
      <h2 className='text-center my-10 text-3xl lg:text-4xl'>About <span>Me</span></h2>
      <p className='text-base sm:text-lg lg:text-xl leading-relaxed'>
        {About_me}
      </p>
    </div>
  </div>

  )
}

export default About