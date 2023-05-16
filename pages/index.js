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
import AboutServices from "@/component/Sections/AboutServices"
import TestimonyCard from "@/component/Cards/TestimonyCard"

export default function Home() {
  const {devotional} = useStateContext()


  return (
    <>
      <Head/>
      <HeroBanner/>
      <Credibility heading={'In Our Work We Have Pride. We Build A Better Tomorrow With Innovative Solutions '} text={`We offer varieties of construction and housing projects with the aim to to provide affordable and sustainable solutions while promoting economic growth and social responsibility.`} img={`construction-men-designing.jpg`} />
      <Services/>
      <Estate/>
      <Property/>
      <WideSection 
        heading='We Offer The Most Complete Urban Development Services.'
        text={`Our goal is to help our clients create vibrant, livable, and sustainable urban environments. With our complete urban development services, we can help you achieve your vision for your community.`}
        img='/housing/estate3.jpg'
        btnText='Contact Us' btnLink='/contact'
      />
      <Projects/>
      <Testimonial heading={`What Are They Saying About Our Services `} 
      note1='Helping to promote economic growth and create a better future for all.'
      note2='Flexible and diverse portfolio to tackle complex challenges and deliver innovative solutions.' 
      note3='Driven by a passion for collaboration, innovation, and continuous improvement.' 
      img1='/construction/project03-650x700.jpg' 
      img2='/construction/project05-650x700.jpg'
      />
     
      <Clientele home={true}/>
      <Newsletter/>
    </>
    
  )
}
