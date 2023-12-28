import { MdArrowCircleRight } from 'react-icons/md'
import Link from 'next/link'

const AboutConstruction = ({btnText, btnLink}) => {
  return (
    <div className="grid gap-4">
            
            <h5 className="text-lg font-semibold ">
            The strength, durability and very precise assembly as well as the cold-rolling gives you entirely new opportunities and solid solutions.
            </h5>
            <div className="grid gap-2 ">
            {
                [
                    `Build with our steel frame solutions`,
                    `Reduce project costs with modern technology`,
                   ` Exceptional quality, unbeatable value`,
                    `Obtain the benefits of cold-rolled steel`,
                   
                ].map((item, i)=>(
                    <div className="flex gap-4" key={i}>
                        <div className='text-tertiary text-2xl'><MdArrowCircleRight/></div> <p>{item}</p>
                    </div>
                ))
            }
            </div>
            <Link href={btnLink} className='py-4 px-6 rounded-full  bg-blue-400 hover:bg-blue-700 duration-300 text-white text-lg text-center '>
                {btnText}
            </Link>
        </div>
  )
}

export default AboutConstruction