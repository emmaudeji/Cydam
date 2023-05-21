import React from 'react'
import Link from "next/link"
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'


const MenuItems = ({menu, active, setActive, mobile, setShowMobileNav}) => {
    const [dropdown, setDropdown] = useState(false)
   
  return (
    
    <div onClick={() => setActive(menu.title)}
    className={mobile ? `w-full h-full shadow` : `h-full relative`} >
        <div  className={mobile ? '' : 'h-full' } onClick={() => setDropdown((prev) => !prev)}>
        {
            menu.subMenu ? (
                <>
                    <button type="button"  
                        className=' h-full p-4 xl:p-6 hover:text-blue-700 duration-300  flex items-center gap-4 w-full'
                        >
                            <div>{menu.title}</div>
                            {!dropdown ? <MdArrowDropDown/> : <MdArrowDropUp/>}
                    </button>
                   {dropdown && <DropdownMenu submenus={menu.subMenu} active={active} setActive={setActive} mobile={mobile} setShowMobileNav={setShowMobileNav}/>}
                </>
               
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
