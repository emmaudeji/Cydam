import React from 'react'

const SimpleInput = ({icon, onChange}) => {
  return (
    
        <div className=" px-4 overflow-hidden rounded-full w-full h-14 bg-white text-black flex items-center gap-2">
            <div className="text-lg text-zinc-400 h-full  flex items-center border-r pr-2 border-zinc-300"> {icon}</div>
            <input type="text" className='w-full h-full py-2' onChange={onChange}/>
        </div>
  )
}
export default SimpleInput