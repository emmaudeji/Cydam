import SectionHeading from "../Cards/SectionHeading"


const BlogSection = () => {
  return (
    <div className="section-padding">
        <div className="pb-14 text-center">
            <SectionHeading whitebg={true} text={'Our Recent'} emphasis={'News And Blog'}/>
        </div>
    
    <div className=' grid lg:grid-cols-3 gap-8' >
        <div className="col-span-1">
            <div className="">
                <div className="h-60 w-full bg-red-400"></div>
                <div className="h-80 bg-red-700"></div>
            </div>

        </div>
        <div className="col-span-2 grid lg:grid-cols-2 gap-3">
            {
                [1,2,3,4,5,6,7,8,9,34,5].map((item, i)=>{

                    return(
                        <div className="flex gap-4 bg-slate-400 w-full" key={i}>
                            <div className="w-24 h-24 bg-yellow-500 overflow-hidden">
                                {/* <img src="" alt="" /> */}
                                <p className='flex items-center justify-center' >{item}</p>
                            </div>
                            <div className="p-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, beatae.
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default BlogSection