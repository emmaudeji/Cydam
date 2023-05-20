import React from 'react'
import SectionHeading from '../Cards/SectionHeading'
import Link from 'next/link'
import { blog } from '@/Data/blog'
import BlogImageCard from '../Cards/BlogImageCard'

const Blog = () => {
  return (
    <div className='section-padding '>
        <div className='pb-20 flex justify-center w-full'>
            <div>
            <SectionHeading text='Our Latest ' emphasis='Articles' whitebg='whitebg'/>
            </div>
        </div>

            <div className="overflow-auto w-full">
                <div className="flex gap-6 pb-6">
                    {
                        blog?.map(({id, title,author, comment,  highlight, date, img, })=>(
                            <div key={id}>
                                <div className='w-[330px] h-full'>
                                   <BlogImageCard id={id} title={title} img={img} highlight={highlight} author={author} date={date} comment={comment?.length}/>
                                </div>
                            </div>
                        ))
                    }                  
                </div>
            </div>
            

 

        <div className='pt-16 flex justify-center w-full'>
            <div>
                <Link href='/blog' className='rounded-full px-8 py-3 font-semibold border-2 hover:bg-blue-400 hover:text-white border-blue-400 duration-300 '>{`All Blogs  >`}</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Blog