
import PageHeroBanner from '@/component/Heading/PageHeroBanner'
import Head from "@/component/Layout/Head"
import Services from "@/component/Sections/Services"

const about = () => {
  return (
    <>
     <Head/>
    <PageHeroBanner heading='About Us' page={`Home/about`}/>
    <div>
        
   
    <Services/>
        
    </div>
    </>
    
  )
}

export default about