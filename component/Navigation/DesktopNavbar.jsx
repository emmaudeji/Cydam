import { navLinks } from "@/Data/navLinks"
import MenuItems from "./MenuItems";


const DesktopNavbar = ({active, setActive, }) => {

  return (
    
        <ul className="flex w-full items-center justify-between bg-primary">

            {
                navLinks?.map((item, i) => (
                    <li key={i}>
                        <MenuItems menu={item} active={active} setActive={setActive}/> 
                    </li>
                ))
            }
        </ul>
       
  )
}

export default DesktopNavbar