import React from 'react'

const SectionHeading = ({emphasis, text}) => {
  return (
    <div className='flex gap-2 text-2xl md:text-3xl font-bold w-full'>
        <div className='text-white'>{text}</div>
        <div className="text-blue-400">{emphasis}</div>
    </div>
  )
}

export default SectionHeading