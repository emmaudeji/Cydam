import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import WideSection from "@/component/Sections/WideSection"
import Clientele from "@/component/Sections/Clientele"
import AboutServices from "@/component/Sections/AboutServices"
import GridBanner from "@/component/Sections/GridBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Services from "@/component/Sections/Services"
import AboutInvestment from "@/component/Services/AboutInvestment"
import { ValuesInvestment } from "@/component/Services/ServicesWorks"

const invest = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Investment And Free Trade Zone' img="/investment/businessarea.avif" page={`Home > Services > Investment`}/>

      <AboutServices
      heading={`Unlock the potential of African markets with us`}
      note1='Invest in Africa with confidence, with our expert investment solutions' note2='Navigating regulatory and compliance issues in African markets? Let us guide you to success"' note3={`From licensing to ongoing compliance, we've got you covered`} img1='/investment/looking-statistics.avif' img2='/investment/man-2-statistics.avif'
      component={<AboutInvestment btnText='Get Started' btnLink='/contact'/>}
      
      />
          
          <GridBanner 
            page='estate'
            heading={`Invest in Africa's vibrant and growing markets today`}
            text='We ensure that your investment is in good hands. Our services include navigating regulatory and compliance issues, setting up a business in a free trade zone, and ongoing support and guidance'
            img='/investment/coins.avif'
            component={ValuesInvestment}
            />

          <WideSection
             heading='Untap the benefits of investing in African markets'
             text={`From licensing to ongoing compliance, we've got you covered: Explore our investment and free trade zone services. We all you need to maximize profit.`}
             img='/investment/two-men-statistics.avif'
             btnText='Contact Us' btnLink='/contact'
          />

          <Services/>
          <Clientele about='services'/>
          <Newsletter/>
    </>
    
  )
}

export default invest