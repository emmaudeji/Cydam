import Link from "next/link"
const BlogCard = ({ img, title, highlight, id}) => {
    return (
      <div className={"w-full flex gap-4 items-center "}>
        <div>
        <div className="rounded-[20px] rounded-tl-none h-24 w-24 overflow-hidden"> 
            <img src={img} alt="blog-image" className="image-style" />
          </div>
        </div>
          
          <div className="grid gap-1">
              <h1 className="text-lg font-semibold">{title}</h1>
              <p className="">{highlight}</p>
              <Link href={`/blog/${id}`} className="text-blue-700 text-sm font-semibold">Read Post</Link>
          </div>
      </div>
    )
  }
  
  export default BlogCard