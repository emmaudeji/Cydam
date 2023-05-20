import { IoWaterSharp } from 'react-icons/io5';
import { FaBed } from 'react-icons/fa';
import Image from 'next/image';



const PropertyImageCard = ({img,  team, location, price, bathroom, bedroom, propertyType}) => {
  return (
    <div className='w-full h-[400px] relative z-10'>
        <div className="rounded-[60px] w-[95%] h-[80%] rounded-tl-none overflow-hidden">
            <Image width={300} height={290} src={img} alt="home"  placeholder="blur" blurDataURL='/favicon.ico'
            className='image-style'/>
        </div>

        <div className={`h-[80%] w-[95%]  absolute bottom-0 right-0 -z-10 rounded-[60px] rounded-br-none border-4   border-blue-400 duration-300 `}>
        </div>

        <div className=" px-6 py-2 w-[95%] h-[20%] absolute bottom-0 right-0 ">
                {!team ? 
                
                (<div className="flex justify-between">
                    <div className="grid  font-bold text-lg">
                        <h3 className={``}>
                            {location}
                        </h3>
                        <h3 className="">{` ${price}`}</h3>
                    </div>
                    <div className="grid ">
                        { bedroom ? <p className='flex gap-2'> <FaBed size={20}/> {`${bedroom} `}</p> : null }
                        { bathroom ? <p className='flex gap-2'> <IoWaterSharp size={20}/> {`${bathroom} `}</p> : null }
                    </div> 
                </div> ) : (
                    <div className="flex justify-between">
                        <div className="">
                        <h5>{team.name}</h5>
                        <p className="">{team.title}</p>
                        </div>
                        <div className="flex gap-1"> 
                        <p className="">FB</p>
                        <p className="">LN</p>
                        </div>
                     
                    </div>
                )
                
            }
        </div>
</div>
  )
}

export default PropertyImageCard