import { navLinks } from "@/Data/navLinks"
import Link from "next/link"
import OnClickOutside from "@/Hooks/OnClickOutside"
import { SlideLeftVariants } from "@/animations/SlideLeftVariant";
import {motion, AnimatePresence} from 'framer-motion';


const MobileNavbar = ({active, setActive, showMobileNav,
 setShowMobileNav}) => {

  
  return (
    <AnimatePresence>
    {showMobileNav && <motion.div
      variants={SlideLeftVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className=" bg-blue-50 w-[50vw] shadow-2xl pt-12 pb-4">
      
      <OnClickOutside
          show={showMobileNav}
          onClickOutside={() => setShowMobileNav(false)}
          component={
      <div className="grid gap-6 w-full ">
        {
            navLinks?.map(({id, title, link}) => (
              <Link href={link} key={id} className={`pb-4 w-full  ${navLinks[navLinks.length - 1].title === title ? `border-none` : `border-b border-black` }`}>
                <div  onClick={()=>setActive(title)} 
                className={`${active===title ? `text-blue-700 scale-110` : `` } px-10 duration-300 hover:text-blue-700 hover:scale-110`}>
                  {title}
                </div>
              </Link>
            ))
        }  
      </div> } />
    </motion.div> }
    </AnimatePresence>
    
  )
}

export default MobileNavbar