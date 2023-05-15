import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"
import AboutServices from "@/component/Sections/AboutServices"
import GridBanner from "@/component/Sections/GridBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Services from "@/component/Sections/Services"
import AboutConstruction from "@/component/Services/AboutConstruction"
import { ValuesEnergy } from "@/component/Services/ServicesWorks"


const energy = () => {
  return (
    <>
      <Head/>
      <PageHeroBanner heading='Energy And Waste Management' img="/energy/wind.png" page={`Home > Services > Energy`}/>

      <AboutServices
      heading={`Harnessing Solar, Wind, and Biomass for greener tomorrow`}
      note1='Cutting-Edge Renewable Energy Mix' note2='Turning Waste into Power with Innovative Technologies' note3='Reduce grid and battery
      Costs and level out power supply' img1='/energy/solar.png' img2='/energy/solar-with-inverter.png'
      component={<AboutConstruction btnText='Get A Quote' btnLink='/quote'/>}
      
      />
          
          <GridBanner 
            page='estate'
            heading='Building a Better Future with Sustainable Energy for All'
            text='We are committed to delivering high-quality, innovative solutions that meet the needs of our customers while promoting sustainability and social responsibility. We strive to provide affordable and accessible solutions. '
            img='/energy/solar.png'
            component={ValuesEnergy}
            />

          <WideSection
             heading='Waste-to-Energy Solutions: Turning Waste into Power with Innovative Technologies.'
             text='The C6 Technology processes a wide variety of waste and biomass
             reams to produce a clean, high calorific value gas, which is suitable for utilization in gas engines to generate green electricity.'
             img='/energy/waste.png'
             btnText='Contact Us' btnLink='/contact'
          />
          {/* <Projects/> */}
          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default energy