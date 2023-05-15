import React from 'react'

const PageHeroBanner = ({heading, img, page}) => {
  return (
    <div className=' h-[40vh]  relative top-[12vh]'>
      
    {/* background image */}
    <div className='w-full h-full overflow-hidden'>
      <img src={img ? img : "/construction/skyscraper.jpg"} alt="projects" 
      className='image-style'/>
    </div>

    {/* content */}
    <div className='section-padding absolute top-0 bottom-0 w-full bg-gradient-to-t from-black text-white flex justify-center'>
         <div className='w-full text-center'>
            <h2 className='capitalize text-4xl sm:text-5xl font-bold pb-2 '>
              {heading}
            </h2>
            <div className='flex justify-center ' >
                <div>
                  <p className='rounded-full bg-secondary py-4 px-8'>{page}</p>
                </div>
            </div>
         </div>
    </div>
  </div>
  )
}

export default PageHeroBanner