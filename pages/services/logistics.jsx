import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"
import AboutServices from "@/component/Sections/AboutServices"
import GridBanner from "@/component/Sections/GridBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Services from "@/component/Sections/Services"
import { ValuesLogistics } from "@/component/Services/ServicesWorks"
import Highlight from "@/component/Services/Highlight"
const logistics = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Logistics And Export ' img="/logistics/logistics-container.jpg" page={`Home > Services > Logistics`}/>

      <AboutServices
      heading={`Delivering seamless logistics solutions for your global success.`}
      note1='Unlock the potentials of your business through our export expertise.' note2='Simplify, optimize, and accelerate your international operations.' note3={`Power your global growth through agile logistics services`} img1='/logistics/exportcontainer.jpg' img2='/logistics/data2.jpg'
      component={<Highlight 
        intro='Trust us to handle your logistics needs and experience the seamless flow of your operations, empowering your business to thrive in the competitive international market.' 
        highlight={
            [  
              `Streamline your supply chain to minimize costs`,
              `Optimize routes and consolidate shipments`,
              `Leverage data analytics and real-time tracking `,
              `Collaborate with sustainability-focused partners `
            ]
          } 
        btnText='Get Started' btnLink='/quote'/>}
      />
          
          <GridBanner 
            page='estate'
            heading={`Your trusted partner for seamless logistics and successful exports.`}
            text={`Whether you're a small business or a multinational corporation, we are committed to delivering seamless logistics and export services that enable your business to thrive in the global marketplace.`}
            img='/logistics/data.jpg'
            component={ValuesLogistics}
            />

          <WideSection
             heading='Ready to streamline your global operations? We have a swift plan.'
             text={`Optimize your supply chain, expand into new markets, enhance your international shipping capabilities, leverage on the solutions we offer.`}
             img='/logistics/ship-with-containers.avif'
             btnText='Contact Us' btnLink='/contact'
          />

          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default logistics