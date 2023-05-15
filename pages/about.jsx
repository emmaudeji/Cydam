
import PageHeroBanner from '@/component/Heading/PageHeroBanner'
import Head from "@/component/Layout/Head"
import Credibility from '@/component/Sections/Credibility'
import Services from "@/component/Sections/Services"
import Team from '@/component/Sections/Team'
import Clientele from "@/component/Sections/Clientele"
import Blog from '@/component/Sections/Blog'
import Newsletter from '@/component/Sections/Newsletter'
import AboutServices from '@/component/Sections/AboutServices'
import { AboutCompany } from '@/component/Sections/About'

const about = () => {
  return (
    <>
    <Head/>
    <PageHeroBanner heading='About Us' page={`Home > About`}  img="/construction/construction-flooring.jpg"/>
    <div>
        
    <AboutServices
      heading={`We buil Innovative Lightweight structures in cold-rolled steel`}
      note1='Providing Housing and Development Services at low cost'
      note2='Global Partnership for Building and Construction of Urban Projects'
      note3='Affordable Construction with Innovative Technology' 
      img1='/construction/project03-650x700.jpg' 
      img2='/construction/project05-650x700.jpg'
      component={<AboutCompany/>}
      />
    <Credibility heading={'We reduce the cost of housing by building steel fabricated structures'} text={`Cydam Global offers varieties of construction and housing projects at affordable rate to enhance the quality of living in Africa.`} img={`/construction/project06-650x700.jpg`} />
    <Services/>
    <Team/>
    <Blog/>

    <Clientele/>
    <Newsletter/>
    </div>
    </>
    
  )
}

export default about