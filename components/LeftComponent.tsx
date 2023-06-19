"use client"

import React from 'react'
import Link from 'next/link'
import IconPDF from './IconPDF'
import IconMeet from './IconMeet'
import Carousel from './Carousel'
import IconGithub from './IconGithub'

const items = [
  {
    title: 'Dev Team',
    feedback: '"Hello Ikhsan! Thanks for your contribution. It`s a pleasure to work with you."',
    client: 'Development Team',
    clientTitle: 'IT Center Telkom University',
    url: 'https://igracias.telkomuniversity.ac.id/',
  },
  {
    title: 'Trigan.org',
    feedback: '"Ikhsan is a talented frontend developer with a great grasp of React. I would be happy to work with him again!"',
    client: 'Aaron S.',
    clientTitle: 'Founder & CEO Trigan',
    url: 'https://trigan.org/',
  },
];

const LeftComponent = () => {
  return (
    <>
      <div className=''>
        <div 
          className=' flex 
                      gap-3 
                      mr-[4rem] 
                      sm:ml-12 
                      sm:mt-[20rem] 
                      pl-[4rem] 
                      sm:pl-[0rem] 
                      mt-[2rem] 
                      sm:pt-[0rem] 
                      static 
                      sm:fixed 
                      sm:pr-[50rem] 
                      items-center'>
        
        {/* <img alt="Ikhsan N. Huda" src="/ns.png" priority className="mt-8 rounded-full w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-cover" /> */}
         <div>    
          <div className='flex flex-col gap-1'> 
        
        <h1 className='text-8xl font-lato italic text-[#bababa] '>Ikhsan.</h1>             
         <div className='flex gap-2 text-[#bababa]'> 
          <h2 className='text-1xl font-catamaran text-[#bababa] '>
            A Happy React User
          </h2>
          <IconGithub />
          </div>
          </div>
          <hr className='w-[10rem] h-[0.5rem] bg-[#bababa] mt-4' />
          <div className='flex gap-6 mt-4 font-catamaran text-white'>
            <div className='flex items-center gap-1'>
             <Link href='/'> Resume  </Link> <IconPDF />
            </div>
            <div className='flex items-center gap-1'>
             <Link href='/'> Schedule e-Meet  </Link> <IconMeet />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel items={items} />
      </div>
    </>
  )
}

export default LeftComponent;