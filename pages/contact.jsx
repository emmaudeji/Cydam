import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"

const contact = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Contact Us' img="/housing/estate2.jpg" page={`Home > Services > Contact`}/>

      <div>
        <PageConstruction/>
    </div>
    
    </>
    
  )
}

export default contact