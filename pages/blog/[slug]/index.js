import { useState, useEffect } from "react"

import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Article from "@/component/Sections/Aside"
import Head from "@/component/Layout/Head"
import Newsletter from "@/component/Sections/Newsletter"
import { blog } from "@/Data/blog"
import Image from "next/image"
import Link from 'next/link'
import {CgProfile} from "react-icons/cg"
import {FaRegComments} from "react-icons/fa"
import { MdDateRange } from 'react-icons/md'
import CTAprojects from "@/component/Sections/CTAprojects"
import Blog from "@/component/Sections/Blog"
import CommentForm from "@/component/Forms/CommentForm"
import { scrollToElement } from "@/utils/scrollToElement"
import { useStateContext } from "@/contextHook/StateContext"
import ReactMarkdown from 'react-markdown';



const BlogId = ({data,}) => {

    const {blogData, setBlogData, addBlogComment} = useStateContext()
    
    const [show, setShow] = useState(false)
    const [blogs, setBlogs] = useState(blog)
    const [category, setCategory] = useState('All Blogs')
    const [blogPost, setBlogPost] = useState(blogData)
    const [newComment, setNewComment] = useState(false)
  
   
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
    }, [category])
    

    useEffect(() => {
      setBlogData(data)
    }, [data])

    useEffect(() => {
        setBlogPost(blogData)
        console.log('postcopmment', blogPost[0]?.comment)
    }, [blogData, newComment])
    

    console.log('newComment', newComment)
    console.log('POSTTTT', blogPost)

    const {id, img, title, date, author, ogImg, tags, comment, keywords, highlight, content} = blogPost;


  return (
    <>
      <Head title="Cydam - News" ogImg={ogImg} />

      <PageHeroBanner heading='Read Blog Post' img="/housing/estate2.jpg" page={`Home > Blog > Post`}/>

      <div className="pt-48">

      <section className="section-padding2 pb-24 grid gap-4 lg:grid-cols-4">
        <div className="main w-full lg:col-span-3">
            <Link href={'/blog'} className="textlg font-semibold py-6 ">
                {`<  Back to Blogs`}
            </Link>

            <div className=" bg-blue-50 py-10">
                <div key={id} className=" grid gap-10">
                    <div className=" px-4 sm:px-10 ">
                        <h2 className="text-3xl font-bold pb-2">
                            {title}
                        </h2>
                        <p className="text-lg pb-4 ">{highlight}</p>
                        <div className='flex justify-between border-t-2 pt-6 items-center '>
                            <div className="flex gap-3 items-center">
                                <p className="text-zinc-700"><CgProfile size={20}/></p>
                                <p className="text-zinc-700 font-semibold">{author}</p>
                            </div>
                            
                            <p className="flex gap-3">
                                <MdDateRange size={20}/> <p>{date}</p>
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-[300px] sm:h-[450px] overflow-hidden">
                        <Image width={500} height={500} src={img} alt={author} className="image-style"/>
                    </div>

                    <div className="px-4 sm:px-10 ">
                        <div onClick={() => scrollToElement(`Comments`)}  className="flex gap-3 items-center border-b-2 pb-6 ">
                                <p className="text-zinc-700"><FaRegComments size={20}/></p>
                                <p className="text-zinc-700">{comment?.length}</p>
                                <p className="text-zinc-700">Comments</p>
                        </div>
                    </div>

                    <div className="grid gap-8 px-4 sm:px-10">
                            <ReactMarkdown>{content?.join('\n\n')}</ReactMarkdown>

                    </div>
                </div>
                    
            </div>
            
            <div id="Comments" className="py-10 border-t-2 px-4 sm:px-10">
                <h3 className="text-3xl font-bold">Comments</h3>
                <div className="grid gap-6 pt-8">
                    {
                        blogPost?.comment?.map((item, i) => (
                            <div className="border-b-2 pb-6" key={i}>
                                
                                <p>{item.comment}</p>
                                <div className="pt-3 flex gap-3 ">
                                    <div className="flex gap-2
                                    ">
                                        <CgProfile size={20}/>
                                        <p>{item.user}</p>
                                    </div>
                                    <div className="flex gap-2
                                    ">
                                        <MdDateRange size={20}/>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="py-10 border-t-2 px-4 sm:px-10">
                <h3 className="text-3xl font-bold">Leave A Reply</h3>
                <div className="form max-w-[600px]">
                    <CommentForm setNewComment={setNewComment}/>
                </div>
            </div>
        </div>

        <div className="article lg:col-span-1 hidden lg:block">
          <Article show={show} setShow={setShow} setCategory={setCategory}/>
        </div>
      </section>
        
    </div>
    <CTAprojects link={'/properties'} heading={`Discover the perfect property for your lifestyle and budget with our comprehensive real estate services`} btnTxt='Find Out More'/>
    <Blog/>
    <Newsletter/>
    </>
  )
}

export default BlogId


  export const getServerSideProps = async ({ params }) => {
    const { slug } = params;
  
    try {
      // Fetch project data by id
      
      const data = blog?.find((item) => item.title === slug);
      console.log(data, slug)
  
      if (!data) {
        return {
          notFound: true,
        };
      }
  
      return { props: { data: data,} };
    } catch (error) {
      console.error(error);
      return { props: { course: null } };
    }
  };

  