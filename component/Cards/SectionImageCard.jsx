
const SectionImageCard = ({heading}) => {
  return (
    <div className='w-full h-[500px] sm:h-[580px] relative'>
        <div className="rounded-[100px] w-[95%] h-[80%] rounded-tl-none border-4  border-blue-400">
        </div>
        <div className=" h-[80%] w-[95%]  absolute bottom-0 right-0 rounded-[100px] rounded-br-none overflow-hidden ">
            <img src="/construction-men-designing.jpg" alt="home" 
            className='image-style'/>
        </div>
        <div className="flex items-center px-10 pt-4 w-[95%] h-[20%] absolute top-0 left-0 ">
            <h3 className={`text-4xl font-bold`}>
                {heading}
            </h3>

        </div>
    </div>
  )
}

export default SectionImageCard