import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import PageConstruction from "@/component/PageConstruction"
import Head from "@/component/Layout/Head"
import Newsletter from "@/component/Sections/Newsletter"

const Projects = () => {
  return (
    <>
    <Head/>
      <PageHeroBanner heading='Recent Projects' img="/housing/estate2.jpg" page={`Home > Services > Projects`}/>

      <div>
        <PageConstruction/>
    </div>
    <Newsletter/>
    
    </>
    
  )
}

export default Projects