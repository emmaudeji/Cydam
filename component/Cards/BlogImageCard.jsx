import React from 'react'
import Link from 'next/link'
import {CgProfile} from "react-icons/cg"
import {FaRegComments} from "react-icons/fa"
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const BlogImageCard = ({id, title, author, comment,  highlight, date, img,}) => {
  return (
    <div className='w-full h-full pb-6 rounded-[30px] rounded-tl-none border-2 bg-white hover:shadow-xl duration-300 cursor-pointer overflow-hidden'>
        
        <div className="w-full h-48 overflow-hidden">
            <img src={img} alt="blog-img" className='image-style'/>
        </div>

        <div className="grid gap-3 px-6">
            <div className='flex gap-2  pt-4 text-s items-center '>

                <p className="text-zinc-700"><CgProfile/></p>
                <p className="text-zinc-700 font-semibold">{author}</p>
                <p className="text-zinc-700">/</p>
                <p className="text-zinc-700"><FaRegComments/></p>
                <p className="text-zinc-700">{comment}</p>
                <p className="text-zinc-700">Comments</p>

            </div>

            <div className=''>
                <h3 className='font-semibold text-secondar  text-lg'>{title}</h3>
                <p className=''>{highlight}</p>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center gap-2 font-semibold text-tertiary hover:scale-110 duration-300">
                    <div >
                        <Link href={`/blog/${id}`} className=''>Learn more</Link>
                    </div>
                    <p className=""><MdOutlineArrowRightAlt/></p>
                </div>
                <p className='text-sm'>
                    {date}
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default BlogImageCard