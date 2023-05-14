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
import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import About from "@/component/Sections/About"
import AboutServices from "@/component/Sections/AboutServices"
import HousingServices from "@/component/Sections/GridBanner"

export const index = () => {

    return (
        <>
          <Head/>
          <PageHeroBanner heading='Our Services' page={`Home > Services`}/>
          <AboutServices/>
          <Services/>
          <HousingServices/>
          
          
          <WideSection/>
          
          
          <Clientele about='services'/>
          <Newsletter/>
        </>
        
      )
    }

export default index