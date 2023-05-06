import React from 'react'

const CredibilityCard = () => {
  return (
    <div className='flex gap-4 w-full h-full p-8 relative border-4 border-blue-400 rounded-[80px] rounded-tl-none'>
        {/* <div className="w-4 h-full bg-blue-400">
            {' '}
        </div> */}
        <div className="grid gap-4 pb-20">
        
                <h3 className='text-3xl xl:text-4xl font-bold'>
                    {` In Our Work We Have Pride, Quality Is What We Provide. We Build Tomorrow at low cost`}
                </h3>
                <p>
                Cydam Global offers varieties of construction and housing projects at affordable rate to enhance the quality of living in Africa.
                </p>
         
        </div>
        <div className="px-8 absolute bottom-[-60px] right-0 left-0">
                <div className="overflow-hidden h-36 w-full rounded-full  rounded-tr-none">
                    <img src="construction-men-designing.jpg" alt="credibility" className='w-full h-full object-cover'/>
                </div>
        </div>
    </div>
  )
}

export default CredibilityCard