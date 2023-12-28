import React from 'react'

const SectionHeading = ({whitebg, emphasis, text}) => {
  return (
    <div className='flex gap-2 text-2xl md:text-3xl font-bold w-full'>
        <div className={whitebg ? '' : 'text-white'}>{text}</div>
        <div className={whitebg ? '' : 'text-white'}>{emphasis}</div>
    </div>
  )
}

export default SectionHeading





// import React from 'react'

// const SectionHeading = ({whitebg, emphasis, text}) => {
//   return (
//     <div className='lowercase flex gap-2 text-2xl md:text-3xl font-bold w-full'>
//         <div className={`${whitebg ? '' : 'text-white '} flex`}> <p className='capitalize'>{text[0]} </p>{text.slice(1)}</div>
//         <div className="text-blue-400">{emphasis}</div>
//     </div>
//   )
// }

// export default SectionHeading