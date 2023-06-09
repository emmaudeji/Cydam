import React from 'react'
import Link from "next/link"
import DropdownMenu from './DropdownMenu'
import { useState, useEffect } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

import OnClickOutside from "@/Hooks/OnClickOutside"
import { dropdownVariants } from "@/animations/DropdownVariants";
import {motion, AnimatePresence} from 'framer-motion';
import { useRouter } from 'next/router'


const MenuItems = ({menu, active, setActive, mobile, setShowMobileNav}) => {
    const router = useRouter()
    const [dropdown, setDropdown] = useState(false)
   console.log(dropdown, router.pathname)

   const handleClick = () => {
        setActive(menu.title)
        setDropdown(prev => !prev)
   }

   useEffect(() => {
     setDropdown(false)
   }, [router.pathname])
   
  return (
    
    <div onClick={handleClick}
    className={mobile ? `w-full h-full shadow` : `h-full relative`} >
        <div  className={mobile ? '' : 'h-full' }>
        {
            menu.subMenu ? (
                <div className='relative'>
                    <button type="button"  
                        className=' h-full p-4 xl:p-6 hover:text-blue-700 duration-300  flex items-center gap-4 w-full '
                        >
                            <div>{menu.title}</div>
                            {!dropdown ? <MdArrowDropDown/> : <MdArrowDropUp/>}
                    </button>

                    <AnimatePresence>
                        {dropdown && <motion.div
                        variants={dropdownVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className={`${ mobile ? 'w-full' : '-z-10 absolute top-[66px] left-[-30%] w-80 shadow-2xl'}   bg-primary ` }>
                            <DropdownMenu submenus={menu.subMenu} active={active} setActive={setActive} mobile={mobile} setShowMobileNav={setShowMobileNav}/>
                        </motion.div> }
                    </AnimatePresence>
                </div>
               
            ) : (
                <Link href={menu.link} className= {`h-full p-4 xl:p-6 hover:text-blue-700 duration-300 flex items-center ${active===menu.title ? `text-secondary ` : `` } `}
                >
                   <p onClick={mobile ? () => setShowMobileNav(false) : null}> {menu.title}</p>
                </Link>
                
            )
        }
        </div>
    </div>
  )
}

export default MenuItems
