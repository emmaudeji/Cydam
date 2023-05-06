

const CredibilitySmallCards = ({title, text, icon,}) => {
  return (
   <div className="w-full hover:shadow-2xl duration-300 text-ccenter grid gap-1 justify-center p-6">
        <div className="icon text-[80px] flex justify-center ">{icon}</div>
        <h3 className="font-bold text-xl flex justify-center ">{title}</h3>
        <p className="text-zinc-400 flex justify-center  "> {text}</p>
    </div>
  )
}

export default CredibilitySmallCards