import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"

const Blog = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Our Blog' img="/housing/estate2.jpg" page={`Home > Services > Blog`}/>

      <div>
        <PageConstruction/>
    </div>
    
    </>
    
  )
}

export default Blog