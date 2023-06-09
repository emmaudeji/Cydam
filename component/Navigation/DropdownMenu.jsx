import Link from "next/link"

const DropdownMenu = ({submenus, active, setActive, mobile, setShowMobileNav}) => {
  
  return (
    <>
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
    </>
  )
}

export default DropdownMenu