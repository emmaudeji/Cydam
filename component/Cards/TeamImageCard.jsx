import React from 'react'
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import Link from 'next/link'


const TeamImageCard = ({name, title, img, fb, ln}) => {
  return (
    <div className='w-full h-[400px] relative z-10'>
        <div className="rounded-[50px] w-[95%] h-[80%] rounded-tl-none overflow-hidden">
            <img src={img} alt="team" 
            className='image-style'/>
        </div>

        <div className={`h-[80%] w-[95%]  absolute bottom-0 right-0 -z-10 rounded-[50px] rounded-br-none border-4   border-blue-400 duration-300 `}>
        </div>

        <div className=" px-8 py-2 w-[95%] h-[20%] absolute bottom-0 right-0 ">
                
                    <div className="flex w-full justify-between items-center">
                        <div className="pt-4">
                          <h5 className='text-lg font-semibold leading-3'>{name}</h5>
                          <p className="">{title}</p>
                        </div>

                        {/* <div className="flex gap-1 text-3xl text-slate-400 "> 
                          <Link href={fb} className="hover:text-blue-400 duration-300"><AiFillFacebook/></Link >
                          <Link href={ln} className="hover:text-blue-400 duration-300"><AiFillLinkedin/> </Link >
                        </div> */}

                    </div>
           
        </div>
</div>
  )
}

export default TeamImageCard