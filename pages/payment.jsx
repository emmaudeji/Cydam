import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"
import Newsletter from "@/component/Sections/Newsletter"

const Payment = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Easy Payment' img="/housing/estate2.jpg" page={`Home >  Payment`}/>

      <div>
        <PageConstruction/>
    </div>
    <Newsletter/>
    </>
    
  )
}

export default Payment