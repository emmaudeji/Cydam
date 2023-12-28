import { MdArrowCircleRight } from 'react-icons/md'
import Link from 'next/link'

const AboutRealEstate = ({btnText, btnLink}) => {
  return (
    <div className="grid gap-4">
            
            <h5 className="text-lg font-semibold ">
             We build homes and cities that are modern and nurturing, clean and purposeful and make it affordable for middle class families in Africa with maximum luxury .
            </h5>
            <div className="grid gap-2 ">
            {
                [
                    `Affordable luxury homes for all`,
                    `Modern designs, affordable prices`,
                   ` Exceptional quality, unbeatable value`,
                    `Get the best support among all vendors`,
                   
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

export default AboutRealEstate