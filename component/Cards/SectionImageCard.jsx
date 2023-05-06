
const SectionImageCard = ({heading, text}) => {
  return (
    <div className='w-full h-full'>
        <div className="border-4 border-blue-400 w-[90%] h-[450px] rounded-[100px] rounded-tl-none ">
            <div className="relative p-6 ">
                <h3 className={`${text ? `text-2xl` : `text-4xl` }  font-bold`}>
                    {heading}
                </h3>
                {text && <p className="">{text}</p> }
                <div className="w-[120%] pt-4 h-[400px] rounded-[100px] rounded-br-none overflow-hidden">
                    <img src="/construction-men-designing.jpg" alt="home" 
                    className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionImageCard