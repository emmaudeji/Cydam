import React from 'react'
import Link from "next/link"
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'


const MenuItems = ({menu, active, setActive, mobile, setShowMobileNav}) => {
    const [dropdown, setDropdown] = useState(false)
   
  return (
    
    <li key={menu.id} onClick={() => setActive(menu.title)}
    className={mobile ? `py-6 w-full pl-6 shadow` : `h-full relative`} >
        <div  className={mobile ? '' : 'h-full' } onClick={() => setDropdown((prev) => !prev)}>
        {
            menu.subMenu ? (
                <>
                    <button type="button"  
                        className=' h-full duration-300 hover-scale-blue flex items-center gap-4'
                        >
                            <div>{menu.title}</div>
                            {!dropdown ? <MdArrowDropDown/> : <MdArrowDropUp/>}
                    </button>
                   {dropdown && <DropdownMenu submenus={menu.subMenu} active={active} setActive={setActive} mobile={mobile} setShowMobileNav={setShowMobileNav}/>}
                </>
               
            ) : (
                <Link href={menu.link} className= {`h-full duration-300 hover-scale-blue flex items-center ${active===menu.title ? `text-secondary ` : `` } `}
                >
                   <p onClick={mobile ? () => setShowMobileNav(false) : null}> {menu.title}</p>
                </Link>
                
            )
        }
        </div>
        
        
    </li>
  )
}

export default MenuItems
