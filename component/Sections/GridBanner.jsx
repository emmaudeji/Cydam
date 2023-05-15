import React from 'react'


const GridBanner = ({page , heading, text, img, component}) => {
    

  return (
    <div>
        <div className="grid relative">
            <div className="grid lg:grid-cols-2">

                <div className=" w-full h-[450px] md:h-[600px]  relative">
                    <div className='w-full h-full overflow-hidden'>
                         <img src={img} alt="" className='image-style'/>
                    </div>
                    <div className='absolute top-0 left-0 right-0  bottom-0 bg-gradient-to-t from-black'>{' '}
                    </div>
                </div>

                <div className="w-full py-16 xl:pt-20 px-6 lg:pr-36 h-full">
                    <div>
                        <h2 className="text-4xl xl:text-5xl font-bold pb-6">
                            {heading}
                        </h2>
                        <p className='text-lg'>
                            {text}
                        </p>
                    </div>

                </div>
            </div>
            <div className='lg:absolute top-[60%] right-0  lg:pr-36 z-10'>
            <div className="grid md:grid-cols-2 h-full w-full lg:w-[70vw] xl:w-[60vw] bg-blue-50 ">
                {
                    component?.map(({id, title,text, icon}) => (
                        <div className="py-10 px-6 flex items-center border gap-4 " key={id}>
                            <div className="text-6xl">
                                <p>{icon}</p>
                            </div>
                            <div className="">
                                <h4 className="text-2xl font-bold text-tertiary hover:text-blue-700 duration-300 pb-4 cursor-pointer">
                                    {title}
                                </h4>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))
                }
                

            </div>

            </div>
            
        </div>
    </div>
  )
}

export default GridBanner

