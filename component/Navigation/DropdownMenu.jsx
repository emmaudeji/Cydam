import Link from "next/link"

const DropdownMenu = ({submenus, active, setActive, mobile, setShowMobileNav}) => {
  
  return (
    <ul className={`${ mobile ? 'w-full' : 'absolute top-[12vh] left-[-30%] w-80 shadow-2xl'}   bg-primary ` }>
      {submenus.map(({title, link, id}) => (
        <li key={id} className={id === submenus.length-1 ? `` : ` border-b border-black`}
          onClick={() => setActive(id)}
        >
           <Link href={link} onClick={mobile ? () => setShowMobileNav(false) : null}
           className={`${ active === id ? 'text-blue-700' : null} pl-12 hover:text-blue-700 duration-300 w-full  py-6 flex h-14 items-center`}> 
          
            {title}
          </Link>
        
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu