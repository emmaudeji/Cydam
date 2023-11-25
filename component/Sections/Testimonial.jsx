import {useRef} from 'react'

import TestimonyCard from '../Cards/TestimonyCard'
import GridNotes from '../Cards/GridNotes'



const Testimonial = ({heading, note1, note2, note3, img1, img2 }) => {
    
  return (
    <div className="section-padding2  pt-52 pb-40 w-full bg-blue-50">
        <div className="grid h-full md:grid-cols-2 gap-20 md:gap-10 xl:gap-36 items-center">
            
            <div className="h-full">
                <TestimonyCard heading={heading}/>
            </div>
            
            <div className='h-full'>
                <GridNotes note1={note1} note2={note2} note3={note3} img1={img1} img2={img2}/>
            </div>
            
        </div>
    </div>
  )
}

export default Testimonial





{/* <div className="capitalize  grid sm:grid-cols-2 text-white gap-4 ">
                <div className="h-48 sm:h-full sm:text-end px-10 bg-blue-700 sm:rounded-[60px] sm:rounded-br-none flex items-center justify-center">
                    <h3 className='font-bold md:text-2xl lg:text-3xl text-3xl '> {note1}</h3>
                   {/* <p>{notes[0].name}</p> */}
            //     </div>
            //     <div className="  sm:mt-[10%] sm:rounded-[60px] sm:rounded-bl-none overflow-hidden">
            //         <img src="city.webp" alt="city" className='image-style'/>
            //     </div>
            //     <div className=" sm:mb-[10%] sm:rounded-[60px] sm:rounded-tr-none overflow-hidden">
            //         <img src="construction-men-looking-up.jpg" alt="city" className='image-style'/>
            //     </div>
            //     <div className="h-48 sm:h-full px-10 bg-blue-700 sm:rounded-[60px] sm:rounded-tl-none flex items-center justify-center">
            //     <h3 className='font-bold text-3xl md:text-2xl lg:text-3xl'> {notes[1].text}</h3>
            //        {/* <p>{notes[1].name}</p> */}
            //     </div>
            // </div> */}