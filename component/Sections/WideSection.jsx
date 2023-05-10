import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

const WideSection = () => {
  return (
    <div className=' h-[70vh] capitalize relative'>
      
      {/* background image */}
      <div className='w-full h-full overflow-hidden'>
        <img src="construction-flooring.jpg" alt="projects" 
        className='image-style'/>
      </div>

      {/* content */}
      <div className='section-padding absolute top-0  bottom-0 bg-gradient-to-t from-black text-white flex items-center md:pr-[30%]'>
        
           <div className='grid gap-4'>
            <h2 className='text-4xl sm:text-5xl font-bold '>
                    We Offer The Most Complete Urban Development Services.
                </h2>
                <p className='text-xl font-semibold capitalize'>
                    We are not just A Real Estate Company, we synergize with the government to provide the best urban development services essential for the wellbeing of citizens espacially in Africa
                </p>
                <div className='flex items-center gap-4' >
                    <div className='text-[4em] text-blue-400 hover-scale-110 '><AiFillPlayCircle/> </div>
                    <p className='font-bold text-xl'>How it works</p>
                </div>
           </div>
      </div>
    </div>
  )
}

export default WideSection