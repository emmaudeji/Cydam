import {useRef} from 'react'
import SectionHeading from '../Cards/SectionHeading'
import { partners } from '@/Data/partners'
import { SliderBtn } from '@/utils/SliderBtn'


const Clientele = ({home}) => {
    const scrollRef = useRef(null)

  return (
    <div className={`section-padding2 relative  grid gap-20 ${!home ? 'pt-20 pb-10' : 'bg-primary  pb-40'}`}>
        <div className='flex w-full justify-center'>
            <div>
                <SectionHeading whitebg='whitebg' emphasis={`Partners`} text={`Our Valuable`}/> 
            </div>
        </div>

        
            <div ref={scrollRef} className="flex justify-between items-center w-full  gap-20 overflow-auto  scrollbar-hidden px-3 ">
                
                {
                    partners?.map(({id,logo}) => (
                        <div key={id} className="">
                            <div className={logo === partners[partners.length - 1].logo ? "w-24" : "w-36"} >
                            <img src={logo} alt="" className='image-style'/>
                        </div>
                        </div>
                    ))
                }
            </div>
        <div className={`${!home ? 'top-[100%]' : 'top-[70%]'}  absolute  z-10 section-padding2`}>
            <SliderBtn distance={280} scrollRef={scrollRef}/>
        </div>

      
       
    </div>
  )
}

export default Clientele