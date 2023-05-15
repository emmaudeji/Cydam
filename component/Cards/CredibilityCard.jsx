import React from 'react'

const CredibilityCard = ({heading, text, img}) => {
  return (
    <div className='flex gap-4 w-full h-full p-8 relative border-4 border-blue-400 rounded-[60px] rounded-tl-none'>
        {/* <div className="w-4 h-full bg-blue-400">
            {' '}
        </div> */}
        <div className="grid gap-4 pb-20">
        
                <h3 className='text-3xl xl:text-4xl font-bold'>
                    {heading}
                </h3>
                <p>
                {text}
                </p>
         
        </div>
        <div className="px-8 absolute bottom-[-60px] right-0 left-0">
                <div className="overflow-hidden h-36 w-full rounded-[60px]  rounded-tr-none">
                    <img src={img} alt="credibility" className='w-full h-full object-cover'/>
                </div>
        </div>
    </div>
  )
}

export default CredibilityCard