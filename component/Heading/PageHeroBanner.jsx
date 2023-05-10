import React from 'react'

const PageHeroBanner = ({heading, page}) => {
  return (
    <div className=' h-[35vh] capitalize relative'>
      
    {/* background image */}
    <div className='w-full h-full overflow-hidden'>
      <img src="construction-flooring.jpg" alt="projects" 
      className='image-style'/>
    </div>

    {/* content */}
    <div className='section-padding absolute pt-40 top-0  bottom-0 bg-gradient-to-t from-black text-white flex items-center'>
      
         <div className=''>
            <h2 className='text-4xl sm:text-5xl font-bold '>{heading}</h2>
            <div className='flex bg-primary p-4' >
                 <p> {page}</p>
              </div>
         </div>
    </div>
  </div>
  )
}

export default PageHeroBanner