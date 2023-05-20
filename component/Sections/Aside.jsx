import React from 'react'
import SearchBar from "@/component/Navigation/SearchBar"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa"
import { blogCategory } from "@/Data/blog"
import Link from 'next/link'

const Article = ({show, setShow, setCategory, }) => {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-1 gap-4 ">

            <div>
              <div className="search bg-blue-50 p-4">
                <SearchBar/>
              </div>
            </div>

            <div className=" p-4  bg-blue-50 "
            onClick={() => setShow(show => !show)}>

              <div className="flex justify-between pb-4">
                <h4 
                className="text-lg font-semibold text-blue-700 cursor-pointer ">Category</h4>
                <p className="lg:hidden">
                  {!show ? <FaRegArrowAltCircleDown size={20}/> : <FaRegArrowAltCircleUp size={20}/>}
                </p>
              </div>

              {show ? 
                
                <div className=" list lg:hidden grid gap-2  ">
                {
                  blogCategory?.map((item, i) => {
                    return (
                      <div className="flex items-center gap-4 py-4 border-b cursor-pointer" key={i}
                      onClick={() => setCategory(item)}>
                        <div className="text-blue-700">
                          <FaRegArrowAltCircleRight size={20} />
                        </div>
                        <p >{item}</p>
                      </div>
                    )
                  })
                }
                </div> 
              
              : null }

              <div className=" list lg:grid gap-2 hidden ">
                {
                  blogCategory?.map((item, i) => {
                    return (
                      <Link href='/blog' className="flex items-center hover:scale-105 duration-300 cursor-pointer gap-4 py-4 border-b" key={i}
                      onClick={() => setCategory(item)}>
                        <div className="text-blue-700">
                          <FaRegArrowAltCircleRight size={16} />
                        </div>
                        <p >{item}</p>
                      </Link >
                    )
                  })
                }
              </div> 

              <Link href='/blog' className="py-4 cursor-pointer hover:scale-105  duration-300" onClick={() => setCategory('All Blogs')}>
                {`All Blogs     >`}
              </Link>
            </div>
          </div>
  )
}

export default Article