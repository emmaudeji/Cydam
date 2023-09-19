import BlogPostForm from '@/component/Forms/CreateBlog';
import React from 'react'

const CmsPage = () => {

  const fetchblogs = () => {
    
      fetch('/api/blogs')
        .then((response) => response.json())
        .then((data) => {
          // setDataFromApi(data);
          console.log('Documents===', data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  
  }


  return (
    <div className='m-auto max-w-7xl pt-40'>
        <div className="navigation w-full overflow-auto">
            <div className="flex items-center w-full ">
                {[1,2,3,4,5].map((item) => (
                    <div  key={item} className="w-44 h-16 border rounded-sm hover:bg-zinc-300 duration-300 flex justify-center items-center px-6">{item}</div>
                ))
                }
            </div>
        </div>
        <button onClick={fetchblogs} className="px-10 py-3 my-8 bg-blue-600 text-white text-center">
          Fetch Blogs
        </button>


        <div className="mt-12">
              <BlogPostForm/>
        </div>
    </div>
  )
}

export default CmsPage