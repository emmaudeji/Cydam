import { useState } from "react"

import Link from "next/link"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";



import Searchbox from "./Searchbox";
import Image from "next/image";
// import Cydam from "@/public/svg/Cydam";

const Header = ({pageheading}) => {
  
  const [active, setActive] = useState('')
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false);
  

  return (
    <div className="fixed z-50  h-24 w-full bg-primary ">
      <div className="flex items-center section-padding2 shadow h-24 justify-between">

        <Link href={`/`} className=" text-xl font-bold mr-4"> 
          <Image width={100} height={100}  src={'/svg/cydamgroup.png'} alt="cydam-logo"  />
        </Link>

        <div className="hidden md:flex h-full">
          <DesktopNavbar active={active} setActive={setActive}  />
        </div>

        {/* <div className="flex gap-3 cursor-pointer text-xl sm:text-2xl">
          <div className="duration-300 hover:scale-110"
          onClick={() => setShowSearchBox(prev => !prev)}>
            <AiOutlineSearch/>
          </div>
          <div className="flex md:hidden duration-300 hover:scale-110 " onClick={() => setShowMobileNav(!showMobileNav)}>
            {showMobileNav ? <AiOutlineClose/> : <AiOutlineMenu/>}
          </div>  
        </div> */}
      </div>

      <div className="flex md:hidden absolute top-[12vh] right-0"
      >
          <MobileNavbar active={active} setActive={setActive} showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>
        </div>

        <div className="absolute top-[12vh] left-0 right-0 ">
          <Searchbox showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} />
        </div>

    </div>
  )
}

export default Header