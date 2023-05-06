import HeroBanner from "@/component/Heading/HeroBanner"
import Head from "@/component/Layout/Head"
import { useStateContext } from "@/contextHook/StateContext"
import Credibility from "@/component/Home/Credibility"
import Services from "@/component/Home/Services"
import Estate from "@/component/Home/Estate"
import Projects from "@/component/Home/Projects"
import Property from "@/component/Home/Property"

export default function Home() {
  const {devotional} = useStateContext()


  return (
    <>
      <Head/>
      <HeroBanner/>
      <Credibility/>
      <Services/>
      <Estate/>
      <Projects/>
      <Property/>

    </>
    
  )
}
