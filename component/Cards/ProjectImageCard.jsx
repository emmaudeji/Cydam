import Link from "next/link"

const ProjectImageCard = ({heading, text, img, id }) => {
  return (
    <div className='w-fulll h-[400px] relative'>
    <div className="rounded-[60px] w-full h-[80%] rounded-tl-none border-4  border-blue-400">
    </div>
    <div className=" h-[76%] w-[95%]  absolute bottom-0 right-0 rounded-[60px] rounded-br-none overflow-hidden ">
        <img src={img} alt="home" 
        className='image-style'/>
        <button className="w-24 p-3 bg-blue-700 absolute bottom-0 right-0 text-white text-center rounded-l-full ">View</button>
    </div>
    <div className="pl-4 pr-10 py-3 w-[95%] h-[30%] absolute top-0 left-0 ">
        <h3 className={`${text ? `text-2xl` : `text-3xl` }  font-semibold pb-1`}>
            {heading}
        </h3>
        <p className="">{text}</p> 
    </div>
</div>
  )
}

export default ProjectImageCard