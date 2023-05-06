
const PlainCard = ({text, icon, title}) => {
  return (
    <div className={"h-full w-full flex gap-4 items-center "}>
        <div className="text-[100px] border-r font-bold"> {icon}</div>
        <div className="grid ">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="">{text}</p>
           
        </div>
        
    </div>
  )
}

export default PlainCard