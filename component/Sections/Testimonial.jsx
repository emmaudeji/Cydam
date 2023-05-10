import {useRef} from 'react'
import { testimony, notes } from '@/Data/testimony'
import TestimonyCard from '../Cards/TestimonyCard'



const Testimonial = () => {
    
  return (
    <div className="section-padding py-24 w-full bg-blue-50">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="img">
                <TestimonyCard testimony={testimony} heading='What Are They Saying About Our Services '/>
            </div>

            <div className="capitalize  grid sm:grid-cols-2 text-white gap-4 ">
                <div className="h-48 sm:h-full sm:text-end px-10 bg-blue-700 sm:rounded-[60px] sm:rounded-br-none flex items-center justify-center">
                    <h3 className='font-bold md:text-2xl lg:text-3xl text-3xl '> {notes[0].text}</h3>
                   {/* <p>{notes[0].name}</p> */}
                </div>
                <div className="  sm:mt-[10%] sm:rounded-[60px] sm:rounded-bl-none overflow-hidden">
                    <img src="city.webp" alt="city" className='image-style'/>
                </div>
                <div className=" sm:mb-[10%] sm:rounded-[60px] sm:rounded-tr-none overflow-hidden">
                    <img src="construction-men-looking-up.jpg" alt="city" className='image-style'/>
                </div>
                <div className="h-48 sm:h-full px-10 bg-blue-700 sm:rounded-[60px] sm:rounded-tl-none flex items-center justify-center">
                <h3 className='font-bold text-3xl md:text-2xl lg:text-3xl'> {notes[1].text}</h3>
                   {/* <p>{notes[1].name}</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial