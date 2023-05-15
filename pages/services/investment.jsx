import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"

const invest = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Investment And Free Trade Zone' img="/housing/estate2.jpg" page={`Home > Services > Investment`}/>

      <div>
        <PageConstruction/>
    </div>
    
    </>
    
  )
}

export default invest