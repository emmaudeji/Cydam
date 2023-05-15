import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"

const logistics = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Exports and Logistics' img="/housing/estate2.jpg" page={`Home > Services > Logistics`}/>

      <div>
        <PageConstruction/>
    </div>
    
    </>
    
  )
}

export default logistics