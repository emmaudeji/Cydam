import { MdArrowCircleRight } from 'react-icons/md'

const AboutRealEstate = () => {
  return (
    <div className="">
            
            <h5 className="text-lg font-semibold pb-6">
             We specialize in creating homes that are the modern and nurturing, clean and purposeful. We build homes, cities, industrial layouts, we turn waste to refined energy.
            </h5>
            <div className="grid gap-2">
            
            {
                [
                    `Premium services and beyond your expectation`,
                    `Get the best support among all venders`,
                   ` Least Possible Price`,
                    `Get the best support among all vendors`,
                   
                ].map((item, i)=>(
                    <div className="flex gap-4" key={i}>
                        <div className='text-tertiary text-2xl'><MdArrowCircleRight/></div> <p>{item}</p>
                    </div>
                ))
            }
                
            </div>
        </div>
  )
}

export default AboutRealEstate