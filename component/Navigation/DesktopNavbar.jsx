import { navLinks } from "@/Data/navLinks"
import MenuItems from "./MenuItems";


const DesktopNavbar = ({active, setActive, }) => {

  return (
    
        <ul className="flex w-full items-center justify-between gap-14">

            {
                navLinks?.map(item => (
                    <MenuItems menu={item} active={active} setActive={setActive}/> 
                ))
            }
            </ul>
   
    
  )
}

export default DesktopNavbar