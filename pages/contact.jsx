import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"
import Newsletter from "@/component/Sections/Newsletter"

const contact = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Contact Us' img="/housing/estate2.jpg" page={`Home > Services > Contact`}/>

      <div>
        <PageConstruction/>
    </div>
    <Newsletter/>
    
    </>
    
  )
}

export default contact