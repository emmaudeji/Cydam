import HeroBanner from "@/component/Heading/HeroBanner"
import Head from "@/component/Layout/Head"
import { useStateContext } from "@/contextHook/StateContext"
import Credibility from "@/component/Sections/Credibility"
import Services from "@/component/Sections/Services"
import Estate from "@/component/Sections/Estate"
import Projects from "@/component/Sections/Projects"
import Property from "@/component/Sections/Property"
import Newsletter from "@/component/Sections/Newsletter"
import Testimonial from "@/component/Sections/Testimonial"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"

export default function Home() {
  const {devotional} = useStateContext()


  return (
    <>
      <Head/>
      <HeroBanner/>
      <Credibility heading={'In Our Work We Have Pride, Quality Is What We Provide. We Build Tomorrow at low cost'} text={`Cydam Global offers varieties of construction and housing projects at affordable rate to enhance the quality of living in Africa.`} img={`construction-men-designing.jpg`} />
      <Services/>
      <Estate/>
      <Property/>
      <WideSection 
        heading='We Offer The Most Complete Urban Development Services.'
        text='We are not just A Real Estate Company, we synergize with the government to provide the best urban development services essential for the wellbeing of citizens espacially in Africa'
        img='/housing/estate3.jpg'
        btnText='Contact Us' btnLink='/contact'
      />
      <Projects/>
      <Testimonial/>
      <Clientele/>
      <Newsletter/>
    </>
    
  )
}
