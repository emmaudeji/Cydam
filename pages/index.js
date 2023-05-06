import HeroBanner from "@/component/Heading/HeroBanner"
import Head from "@/component/Layout/Head"
import { useStateContext } from "@/contextHook/StateContext"

export default function Home() {
  const {devotional} = useStateContext()


  return (
    <>
      <Head/>
      <HeroBanner/>
      <div className='h-[80vh] border border-black'>
        <h1 className='font-bold text-6xl'>Checking tailwind</h1>
        {devotional}
      </div>
    </>
    
  )
}
