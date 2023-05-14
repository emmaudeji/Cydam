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
      heading={`Quality & Reability With 100% Satisfaction at the least possible cost`}
      note1='Real estate development and industrialization' note2='Waste management and Energy generation' note3='Construction and Project Management' img1='/construction/project03-650x700.jpg' img2='/construction/project05-650x700.jpg'
      component={<AboutRealEstate/>}
      />
          
          <GridBanner 
            page='estate'
            heading='We Make Construction Dream Into Reality'
            text='We provide expert management of the relationship between value, time and cost from inception to completion. We do this through our global experts, who possess core services'
            img='/housing/house2.jpg'
            component={ServicesWorks.estate}
            />

          <WideSection
             heading='We Offer The Most Complete Urban Development Services.'
             text='We are not just A Real Estate Company, we synergize with the government to provide the best urban development services essential for the wellbeing of citizens espacially in Africa'
             img='/housing/estate2.jpg'
          />
          <Property/>
          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default estate