import Image from "next/image"

const ImageCard = ({img}) => {
  return (
   
        <div className="imagesbox relative"> 
        <div className="bg-blue-400 w-36 h-36 rounded-full absolute top-[-60px]  right-[-60px]  hover:scale-90 duration-300">{' '}</div>
  
          <div className="rounded-[100px] lg:rounded-[150px] lg:rounded-tr-none rounded-tr-none h-[50vh] lg:h-[70vh] w-full overflow-hidden relative z-10" >
            <Image width={500} height={500} src={img} alt="herobanner-img" 
            className='w-full h-full object-cover'/>
          </div>
          <div className="z-10 border-4 border-blue-400 w-36 h-36 rounded-full absolute bottom-[-40px]  left-[-40px]  hover:scale-90 duration-300">{' '}</div>
        </div>

  )
}

export default ImageCard