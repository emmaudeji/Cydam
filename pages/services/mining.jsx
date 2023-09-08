import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"
import AboutServices from "@/component/Sections/AboutServices"
import GridBanner from "@/component/Sections/GridBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Services from "@/component/Sections/Services"
import { ValuesLogistics, ValuesMining } from "@/component/Services/ServicesWorks"
import Highlight from "@/component/Services/Highlight"

const mining = () => {
  return (
    <>
    <Head
    description={`
    At Cydam Global, we are at the forefront of driving innovation in the mining and manufacturing industries. With our deep expertise and cutting-edge solutions, we revolutionize the way resources are extracted, processed, and transformed into high-quality products. Our end-to-end solutions encompass every stage, from efficient mining operations to state-of-the-art manufacturing processes. We leverage advanced technologies and industry best practices to maximize efficiency, minimize costs, and deliver exceptional results. As your trusted partner, we empower your business to stay ahead of the competition by embracing the latest advancements in mining and manufacturing. Discover how our expertise can unlock new possibilities for your operations and propel your business to new heights of success in the dynamic world of mining and manufacturing.
    `}/>
      <PageHeroBanner heading='Mining And Manufacturing ' img="/mining/factory.jpg" page={`Home > Services > Manufacturing`}/>

      <AboutServices
      heading={`Innovative Processes, Sustainable Practices: Redefining Mining and Manufacturing`}
      note1='Driving Innovation in Mining and Manufacturing' note2='Quality, Precision and Customized Solutions for Complex Mining and Manufacturing Challenges' note3={`From Extraction to Production, We Deliver End-to-End Solutions`} img1='/mining/black man mining.jpg' img2='/mining/trucks mining.jpg'
      component={<Highlight 
        intro='With our deep expertise and cutting-edge solutions, we revolutionize the way resources are extracted, processed, and transformed into high-quality products. ' 
        highlight={
            [  
              `Experience cutting-edge technologies`,
              `End-to-end manufacturing solutions `,
              `Leverage on Sustainability practices`,
              `Gauranteed Quality assurance`
            ]
          } 
        btnText='Get Started' btnLink='/contact'/>}
      />
          
          <GridBanner 
            page='estate'
            heading={`Precision, Quality, and Performance in Every Process`}
            text={`Our comprehensive solutions empower industries to stay ahead by leveraging cutting-edge technologies and innovation. We tailor our services to meet your unique requirements and address your specific challenges.`}
            img='/mining/digital.jpg'
            component={ValuesMining}
            />

          <WideSection
             heading='Partner with Us for Mining and Manufacturing Excellence.'
             text={`From concept to completion, discover the difference of working with industry experts committed to your growth and achieve manufacturing excellence today.`}
             img='/mining/partnership.jpg'
             btnText='Contact Us' btnLink='/contact'
          />

          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default mining
