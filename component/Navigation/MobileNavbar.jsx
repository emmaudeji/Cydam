import { navLinks } from "@/Data/navLinks"
import Link from "next/link"
import OnClickOutside from "@/Hooks/OnClickOutside"
import { SlideLeftVariants } from "@/animations/SlideLeftVariant";
import {motion, AnimatePresence} from 'framer-motion';
import MenuItems from "./MenuItems";

const MobileNavbar = ({active, setActive, showMobileNav,
 setShowMobileNav}) => {

  
  return (
    <AnimatePresence>
    {showMobileNav && <motion.nav
      variants={SlideLeftVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className=" bg-blue-50 w-[85vw] shadow-2xl max-h-[88vh] overflow-y-auto">
      
      <OnClickOutside
          show={showMobileNav}
          onClickOutside={() => setShowMobileNav(false)}
          component={
      <ul className="grid w-full ">
        {
            navLinks?.map((item, i) => (
              <div key={i}>
                <MenuItems menu={item} active={active} setActive={setActive} mobile={true} setShowMobileNav={setShowMobileNav}/>
              </div>
            ))
        }  
      </ul> } />
    </motion.nav> }
    </AnimatePresence>
    
  )
}

export default MobileNavbar