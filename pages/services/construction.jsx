import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"
import AboutServices from "@/component/Sections/AboutServices"
import GridBanner from "@/component/Sections/GridBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Services from "@/component/Sections/Services"
import Projects from "@/component/Sections/Projects"
import AboutConstruction from "@/component/Services/AboutConstruction"
import { ValuesConstruction } from "@/component/Services/ServicesWorks"


const construction = () => {
  return (
    <>
      <Head/>
      <PageHeroBanner heading='Construction And Engineering' img="/construction/construction-men-looking-up.jpg" page={`Home > Services > Construction`}/>

      <AboutServices
      heading={`We build innovative lightweight structures in cold-rolled steel`}
      note1='Cutting-edge construction with sustainable materials' note2='Redefining construction with cold-rolled steel' note3='Affordable construction with innovative technology' img1='/construction/construction-steel1.jpeg' img2='/housing/estate2.jpg'
      component={<AboutConstruction btnText='Get A Quote' btnLink='/contact'/>}
      />
          
          <GridBanner 
            page='estate'
            heading='Building a better future with innovative technology'
            text='We are proud to offer real estate development, construction, and engineering services that utilize innovative cold-rolled steel technology to reduce costs and improve efficiency. Join us in this journey.'
            img='/construction/construction-steel2.jpg'
            component={ValuesConstruction}
            />

          <WideSection
             heading='Efficient construction with innovative steel technology.'
             text='We work with builders, manufacturers, academia, real estate agents, home owners and Government to create designs and build a new generation of African homes from the
             first growing modern and middle class to the high class families in Africa'
             img='/construction/project05-650x700.jpg'
             btnText='Contact Us' btnLink='/contact'
          />
          <Projects/>
          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default construction