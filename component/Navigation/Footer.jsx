import React from 'react'
import Link from 'next/link'
import PlainBoxCard from '../Cards/PlainBoxCard'
import SocialIcon from '../Cards/SocialIcon'
import { services } from '@/Data/services'
import { blog } from '@/Data/blog'
import BlogCard from '../Cards/BlogCard'

const Footer = () => {
  return (
    <div className='mt-40 sm:pt-0 bg-blue-50 '>
      <div className="section-padding2 py-24 w-full grid gap-10 xl:gap-16 sm:grid-cols-3 relative">

        <div className='sm:col-span-2 lg:col-span-1 relative mb-[200px] sm:mb-0'>
          <div className=' absolute sm:relative top-[-200px] sm:top-0'>
                <PlainBoxCard>
                  <div className=" text-white bg-blue-700 p-10 ">
                    <div className="logo">
                      <h2 className='text-5xl font-bold '>Cydam Global</h2>
                    </div>
                    <p className='py-6 text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus deserunt vitae provident voluptas quidem beatae reprehenderit magni aliquid vel, veritatis fugit laudantium blanditiis reiciendis error sit adipisci praesentium voluptatibus.
                      </p>
                      <SocialIcon size='large'/>
                  </div>
                </PlainBoxCard>
            </div>
        </div>
        
          <div className='links sm:col-span-1 mt-[] sm:mt-0'>
            <h3 className="text-xl font-bold pb-3">Quick Links</h3>
            <div className=" grid gap-6 ">
            {
              services?.map(({id, title, link}) => (
                <div key={id} className='border-b border-blue-200'>
                    <Link href={link} className='text-lg hover-scale-blue pb-2 '>
                      {title}
                    </Link>
                </div>
              ))
            }
          </div>
          </div>
         
          <div className="blog sm:col-span-2 lg:col-span-1 ">
            <div className="grid gap-2">
              {
                blog.slice(0,3).map(({id, img, link, title, highlight})=> (
                  <div key={id} className="">
                    <BlogCard img={img} link={link} title={title} highlight={highlight}/>
                  </div>
                ))
              }
              </div>
          </div>
      </div>
      <div className="section-padding2 pb-8 flex justify-center">
        <div>
          <p>Copyright (c) {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer