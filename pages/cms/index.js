import Googledrivepicker from '@/Hooks/Googledrivepicker';
import BlogPostForm from '@/component/Forms/CreateBlog';
import Image from 'next/image';
import React from 'react'
import UploadImages from '../../component/Forms/UploadImages';

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

  // https://drive.google.com/file/d/1KrFnKulnLXzvkAJDTPyI3flZqaEebA75/view?pli=1
const imgfile = 'https://drive.google.com/uc?export=view&id=1B77jOOqU6KOuqu25dKZxg3phCbYzAlkf'

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

        <Googledrivepicker/>
        <Image width={300} height={300} alt='test' src={imgfile}/>

        <UploadImages/>


        <div className="mt-12">
              <BlogPostForm/>
        </div>
    </div>
  )
}

export default CmsPage