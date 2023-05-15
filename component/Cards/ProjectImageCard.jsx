import React from 'react'

const ProjectImageCard = ({heading, text}) => {
  return (
    <div className='w-full h-[400px] relative'>
    <div className="rounded-[60px] w-[95%] h-[80%] rounded-tl-none border-4  border-blue-400">
    </div>
    <div className=" h-[80%] w-[95%]  absolute bottom-0 right-0 rounded-[60px] rounded-br-none overflow-hidden ">
        <img src="/construction-men-designing.jpg" alt="home" 
        className='image-style'/>
    </div>
    <div className="grid px-10 py-2 w-[95%] h-[20%] absolute top-0 left-0 ">
        <h3 className={`${text ? `text-2xl` : `text-4xl` }  font-bold`}>
            {heading}
        </h3>
        <p className="">{text}</p> 
    </div>
</div>
  )
}

export default ProjectImageCard