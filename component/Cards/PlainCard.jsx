
const PlainCard = ({text, icon, title}) => {
  return (
    <div className={"h-full w-full flex gap-4 items-center "}>
        <div className="text-[60px] border-r text-blue-400"> {icon}</div>
        <div className="grid ">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="">{text}</p>
           
        </div>
        
    </div>
  )
}

export default PlainCard