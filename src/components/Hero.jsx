import React from 'react'
import CustomImage from '../assets/WhatsApp Image 2024-07-04 at 2.39.17 PM(1).jpeg'
import{About_contant} from '../constants/index'
const Hero = () => {
  return (
    <div className='mt-14 pl-10'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
               <div className='flex flex-col items-center lg:items-start'>
                    <h2 className='text-3xl font-thin mt-18'>Bashar Abdalla</h2>
                    <br></br><br></br>

                    <span className='text-3xl bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-transparent tracking-tight'>
                        Student at cairo unversity
                    </span>
                    <p className='my-2 tracking-tight max-w-xl py-6'> {About_contant}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img className='h-96 ml-10 mb-20' src = {CustomImage}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero