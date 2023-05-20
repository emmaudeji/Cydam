import Link from "next/link"
import BtnCTAwhite from "../btn/BtnCTAwhite"

const CTAprojects = ({btnTxt, heading, link}) => {
  return (
    
    <section className="section-padding2 py-24 bg-blue-700 w-full text-center">
        <h2 className="text-3xl font-bold pb-8 text-white">
          {heading}
        </h2>
        <BtnCTAwhite link={link} text={btnTxt}/>
    </section>
  )
}

export default CTAprojects