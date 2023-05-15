

const TextCard = ({heading, component}) => {
  return (
    <div className="">
        <h3 className={`text-3xl font-bold  pb-6`}>
            {heading}
        </h3>
        
        <div className='w-full relative z-10'>
          <div className="rounded-[60px]  w-[95%] h-full rounded-tl-none   bg-white px-8 py-10 xl:py-14 shadow-2xl">
            {component}
          </div>

          <div className="h-full w-[95%] border-blue-400 border-4 absolute top-[5%] left-[5%] rounded-[60px] rounded-br-none -z-10 ">
             
          </div>
    </div>
    </div>
    
  )
}

export default TextCard