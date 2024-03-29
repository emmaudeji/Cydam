import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"
import AboutServices from "@/component/Sections/AboutServices"
import GridBanner from "@/component/Sections/GridBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Services from "@/component/Sections/Services"
import Property from "@/component/Sections/Property"
import AboutRealEstate from "@/component/Services/AboutRealEstate"
import { ServicesWorks } from "@/component/Services/ServicesWorks"


const estate = () => {
  return (
    <>
      <Head/>
      <PageHeroBanner heading='Real Estate Development' img="/housing/estate2.jpg" page={`Home > Services > Real Estate`}/>

      <AboutServices
      heading={`Sustainable housing focused on promoting African architecture`}
      note1='Elevating African real estate with quality and style.' note2='Innovation meets affordability in our steel homes' note3='We are making home ownership a reality for a' img1='/housing/estate3.jpg' img2='/housing/steel-building.png'
      component={<AboutRealEstate btnText='Own A Home' btnLink='/contact'/>}
      
      />
          
          <GridBanner 
            page='estate'
            heading='We bring your home ownership dream into reality'
            text='We pride ourselves on delivering exceptional quality and value to our clients through the use of innovative and sustainable building practices, while making modern, steel-framed homes affordable to all classes of people in Africa.'
            img='/housing/house2.jpg'
            component={ServicesWorks.estate}
            />

          <WideSection
             heading='We offer innovative real estate development services.'
             text='We work with builders, manufacturers, academia, real estate agents, home owners and Government to create designs and build a new generation of African homes from the first growing modern and middle class to the high class families in Africa'
             img='/housing/steel-hut-estate.png'
             btnText='Contact Us' btnLink='/contact'
          />
          <div id="properties">
            <Property/>
          </div>
          
          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default estate