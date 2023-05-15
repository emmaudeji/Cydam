import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import Link from 'next/link'

const WideSection = ({heading, text, img, btnText, btnLink}) => {
  return (
    <div className=' h-[70vh] capitalize relative'>
      
     
      <div className='w-full h-full overflow-hidden'>
        <img src={img} alt="projects" 
        className='image-style'/>
      </div>

      <div className='section-padding absolute top-0  bottom-0 bg-gradient-to-t from-black text-white flex items-center md:pr-[30%]'>
        
           <div className='grid gap-4'>
            <h2 className='text-4xl sm:text-5xl font-bold '>
                   {heading} 
                </h2>
                <p className='text-xl font-semibold capitalize'>
                  {text}
                    
                </p>
                <div className='flex items-center gap-4' >
                    <Link href={btnLink}  className='text-lg bg-blue-400 hover:bg-blue-700 duration-300 hover:text-white px-10 py-4 rounded-full'> {btnText} </Link>
                    
                </div>
           </div>
      </div>
    </div>
  )
}

export default WideSection