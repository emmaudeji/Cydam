import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"

const mining = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Mining And Manufacturing' img="/housing/estate2.jpg" page={`Home > Services > Mining`}/>

      <div>
        <PageConstruction/>
    </div>
    
    </>
    
  )
}

export default mining