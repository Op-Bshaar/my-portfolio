import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiLaravel, SiJavascript, SiPhp } from 'react-icons/si';

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 py-6 ml-8 text-center my-10 '>
        <h2 className='text-3xl'>Technology <span className='text-3xl bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-transparent tracking-tight'>Stack</span></h2>
        <div className='mt-10'>
            <div className='flex justify-center gap-4'>
                <RiReactjsLine size={30}/>
                <SiNextdotjs size={30}/>
                <SiTypescript size={30}/>
                <SiTailwindcss size={30}/>
                <SiMysql size={30}/>
                <SiLaravel size={30}/>
                <SiJavascript size={30}/>
                <SiPhp size={30}/>
            </div>
        </div>

    </div>
  )
}

export default Technology