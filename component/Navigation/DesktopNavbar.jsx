import { navLinks } from "@/Data/navLinks"
import Link from "next/link"

const DesktopNavbar = ({active, setActive}) => {
  return (
    <div className="flex w-full items-center justify-between gap-14">
     
        {
            navLinks?.map(({id, title, link}) => (
                <div key={id} onClick={()=>setActive(title)} 
                className={`${active===title ? `text-blue-700 scale-110` : `` } duration-300 hover:text-blue-700 hover:scale-110 `}>
                    <Link href={link}>
                        {title}
                    </Link>
                </div>
            ))
        }

 

     
    </div>
  )
}

export default DesktopNavbar