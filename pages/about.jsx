
import PageHeroBanner from '@/component/Heading/PageHeroBanner'
import Head from "@/component/Layout/Head"
import About from '@/component/Sections/About'
import Credibility from '@/component/Sections/Credibility'
import Services from "@/component/Sections/Services"
import Team from '@/component/Sections/Team'
import Clientele from "@/component/Sections/Clientele"
import Blog from '@/component/Sections/Blog'
import Newsletter from '@/component/Sections/Newsletter'

const about = () => {
  return (
    <>
    <Head/>
    <PageHeroBanner heading='About Us' page={`Home > About`}  img="/construction/construction-flooring.jpg"/>
    <div>
        
    <About/>
    <Credibility heading={'We reduce the cost of housing by building steel fabricated structures'} text={`Cydam Global offers varieties of construction and housing projects at affordable rate to enhance the quality of living in Africa.`} img={`/construction/project06-650x700.jpg`} />
    <Services/>
    <Team/>
    <Blog/>

    <Clientele about='about'/>
    <Newsletter/>
    </div>
    </>
    
  )
}

export default about