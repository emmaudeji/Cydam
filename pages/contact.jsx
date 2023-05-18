import GoogleMap from "@/component/GoogleMap/GoogleMap"
import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Head from "@/component/Layout/Head"
import ContactSection from "@/component/Sections/ContactSection"
import Newsletter from "@/component/Sections/Newsletter"
import ContactDetails from "@/component/Sections/ContactDetails"

const contact = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Contact Us' img="/housing/estate2.jpg" page={`Home > Services > Contact`}/>

      <div>
       <ContactSection/>
       <ContactDetails/>
       <GoogleMap/>
    </div>
    <Newsletter/>
    
    </>
    
  )
}

export default contact