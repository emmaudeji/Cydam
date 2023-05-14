

const TextCard = ({heading, component}) => {
  return (
    <div className='w-full h-[520px] md:h-[600px] xl:h-[500px] relative'>
        <div className="rounded-[100px] w-[95%] h-[80%] rounded-tl-none border-4  border-blue-400">
            <div className="flex items-center px-10 pt-4 w-[95%] h-[25%] absolute top-0 left-0 ">
              <h3 className={`text-2xl font-bold`}>
                  {heading}
              </h3>
          </div>
        </div>

        <div className="h-[75%] w-[95%]  absolute bottom-0 right-0 rounded-[100px] rounded-br-none p-14  bg-white shadow-2xl">
            {component}
        </div>
    </div>
  )
}

export default TextCard