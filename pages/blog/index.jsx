
import { useState, useEffect } from "react"
import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa"
import Head from "@/component/Layout/Head"
import Newsletter from "@/component/Sections/Newsletter"
import SearchBar from "@/component/Navigation/SearchBar"
import Blog from "@/component/Sections/Blog"
import { blog } from "@/Data/blog"
import { blogCategory } from "@/Data/blog"
import BlogImageCard from "@/component/Cards/BlogImageCard"

const BlogPage = ({data}) => {
  const [show, setShow] = useState(false)
  const [blogs, setBlogs] = useState(blog)
  const [category, setCategory] = useState('All Blogs')

 
  useEffect(() => {
    const blogBycategory = blog?.filter(item => 
      {
        if (category === 'All Blogs') {
          return true
        }
        return item.category === category
      }
      )

    setBlogs(blogBycategory)
    console.log('kkkk', blogBycategory)
  }, [category])
  
  console.log('bbbbbbb', blogs, category)

  return (
    <>
    <Head/>
      <PageHeroBanner heading='Our Blog' img="/housing/estate2.jpg" page={`Home > Blog`}/>

    <div className="pt-48">

      <section className="section-padding2 pb-24 grid gap-4 lg:grid-cols-4">
        
        <div className="article lg:col-span-1">

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
                      <div className="flex items-center hover:scale-105 duration-300 cursor-pointer gap-4 py-4 border-b" key={i}
                      onClick={() => setCategory(item)}>
                        <div className="text-blue-700">
                          <FaRegArrowAltCircleRight size={16} />
                        </div>
                        <p >{item}</p>
                      </div>
                    )
                  })
                }
              </div> 

              <p className="py-4 cursor-pointer hover:scale-105  duration-300" onClick={() => setCategory('All Blogs')}>
                {`All Blogs     >`}
              </p>
            </div>
          </div>
        </div>


        <div className="main w-full lg:col-span-3">
          <div className="flex gap-4 py-6 items-center">
            <p className="text-lg">Category: </p>
            <h3 className="text-2xl font-bold capitalize">{category}</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:flex-wrap ">
          {
            blogs.length ? blogs.map(({ id, img, title, date, author, tags, category, comment, keywords, highlight, content}) => {
              return (
                <div className="sm:w-[330px] h-full" key={id}>
                  <BlogImageCard id={id} title={title} author={author} comment={comment.length}  highlight={highlight} date={date} img={img}/>
                </div>
              )
            }) : 
            <p className="pt-10">No item in this Category. Check another category</p>
          }
          </div>
          
        </div>
      </section>
        
    </div>
    <Blog/>
    <Newsletter/>
    </>
    
  )
}

export default BlogPage



export const getServerSideProps  = async ({params}) => {
  // const id = Number(params.blogId)
  // console.log('iiiii----', id,   'p--', params )
  // const data = blog?.filter(items => items.id === id)
const data = blog

  return {
    props: {
      data: data,
      
    }
  }
}