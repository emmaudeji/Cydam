import Link from "next/link"

const ServiceCard = ({text, linktext, icon, link, title}) => {
  return (
    <div className={" text-white py-6 px-4 h-full w-full flex gap-4 border-4 border-blue-400 rounded-[60px] items-center rounded-tl-none hover:shadow-2xl duration-300"}>
        <div className="text-[60px] border-r "> {icon}</div>
        <div className="grid ">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="">{text}</p>
           {link && <Link href={link} className="font-semibold">{`Learn more   >`}</Link>}
        </div>
        
    </div>
  )
}

export default ServiceCard