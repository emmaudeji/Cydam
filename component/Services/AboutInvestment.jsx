import { MdArrowCircleRight } from 'react-icons/md'
import Link from 'next/link'


const AboutInvestment = ({btnLink, btnText}) => {
  return (
    <div className="grid gap-4">
            
            <h5 className="text-lg font-semibold ">
            We provide investment and free trade zone services to help our clients navigate regulatory and compliance issues while investing in African markets.
            </h5>
            <div className="grid gap-2 capitalize">
            {
                [
                    `Schedule a consultation to discuss your investment`,
                    `We develop tailored solutions that address your goals`,
                   ` Navigate regulatory and compliance issues`,
                    `Commitment to ethical and sustainable business practices.`,
                   
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

export default AboutInvestment