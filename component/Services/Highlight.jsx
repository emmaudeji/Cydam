import { MdArrowCircleRight } from 'react-icons/md'
import Link from 'next/link'


const Highlight = ({btnText, btnLink, highlight, intro})  => {
  return (
    <div className="grid gap-4">
            
            <h5 className="text-lg font-semibold ">
                {intro}
            </h5>
            <div className="grid gap-2 ">
            {
                highlight.map((item, i)=>(
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

export default Highlight