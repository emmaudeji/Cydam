import React from 'react'
import Link from 'next/link'
import PlainBoxCard from '../Cards/PlainBoxCard'
import SocialIcon from '../Cards/SocialIcon'
import { services } from '@/Data/services'
import { blog } from '@/Data/blog'
import BlogCard from '../Cards/BlogCard'
import { Contact } from '@/Data/contact'

const Footer = () => {
  return (
    <div className='mt-40 sm:mt-0 bg-primary'>
      <div className="section-padding2 py-24 w-full grid gap-10 xl:gap-16 sm:grid-cols-3 relative">

        <div className='sm:col-span-2 lg:col-span-1 relative mb-[200px] sm:mb-0'>
          <div className=' absolute sm:relative top-[-200px] sm:top-0'>
                <PlainBoxCard>
                  <div className=" text-white bg-blue-700 p-8 ">
                    <div className="logo">
                      <h2 className='text-4xl font-bold '>Cydam Global</h2>
                    </div>
                    <p className='py-2 text-lg '>
                        Providing low cost housing and revamping urban lifestyle in Africa 
                      </p>
                      <div className="pb-2">
                        <h5 className='font-semibold'>Contact us</h5>
                        <Contact/>
                      </div>
                      
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
            <div className="grid gap-4">
              {
                blog.slice(0,3).map(({id, img, link, title, highlight})=> (
                  <div key={id} className="">
                    <BlogCard img={img} id={id} link={link} title={title} highlight={highlight}/>
                  </div>
                ))
              }
              </div>
          </div>
      </div>
      <div className="section-padding2 pt-4 pb-8 flex justify-center border-t border-blue-200 text-[8px] text-center">
        <div>
          <p>Cydam Global Copyright, {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer