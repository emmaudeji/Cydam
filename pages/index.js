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
      <Credibility/>
      <Services/>
      <Estate/>
      <Property/>
      <WideSection/>
      <Projects/>
      <Testimonial/>
      <Clientele/>
      <Newsletter/>
    </>
    
  )
}
