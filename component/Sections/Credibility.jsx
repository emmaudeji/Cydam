import CredibilityCard from "../Cards/CredibilityCard"
import CredibilitySmallCards from "../Cards/CredibilitySmallCards"
import { credibility } from "@/Data/credibility"


const Credibility = ({heading, text, img}) => {
  return (
    <div className="section-padding py-40  sm:pb-40 grid md:grid-cols-2 gap-36 sm:gap-4  lg:gap-16 xl:gap-36">
        <div className="">
            <CredibilityCard heading={heading} text={text} img={img}/>
        </div>

        <div className="overflow-hidden rounded-[100px] gap-0 rounded-br-none w-full h-full grid grid-cols-2 shadow-xl">
            {
                credibility?.map(({ id, title, text, icon}) => (
                    <div key={id} className="">
                        <CredibilitySmallCards title={title} text={text} icon={icon}/>
                    </div>
                ))
            }
            
        </div>
        
    </div>
  )
}

export default Credibility