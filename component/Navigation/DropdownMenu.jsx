import Link from "next/link"

const DropdownMenu = ({submenus, active, setActive, mobile, setShowMobileNav}) => {
  
  return (
    <ul className={`${ mobile ? 'w-full' : 'absolute top-[12vh] left-[-30%] w-80 shadow-2xl'}   bg-primary ` }>
      {submenus.map(({title, link, id}) => (
        <li key={id} className={`${id === submenus.length-1 ? `` : ` border-b border-black`} py-6 flex`}
          onClick={() => setActive(id)}
        >
           <Link href={link} onClick={mobile ? () => setShowMobileNav(false) : null}
           className={`${ active === id ? 'text-blue-700' : null} px-6 hover-scale-blue w-full`}> 
          
            {title}
          </Link>
        
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu