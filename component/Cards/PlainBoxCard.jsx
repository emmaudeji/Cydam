import React from 'react'

const PlainBoxCard = ({children}) => {
  return (
    <div className='w-full h-full rounded-[60px] rounded-tl-none overflow-hidden'>
        {children}
    </div>
  )
}
export default PlainBoxCard