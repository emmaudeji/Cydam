

const TextCard = ({heading, component}) => {
  return (
    <div className='w-full h-[520px] md:h-[650px] lg:h-[620px] xl:h-[500px] relative'>
        <div className="rounded-[100px] w-[95%] h-[80%] rounded-tl-none border-4  border-blue-400">
            <div className="flex items-center px-10  w-[95%] h-[25%] md:h-[20%] lg:h-[25%] absolute top-0 left-0 ">
              <h3 className={`text-2xl font-bold`}>
                  {heading}
              </h3>
          </div>
        </div>

        <div className="min-h-[75%] md:min-h-[80%] lg:min-h-[75%]  w-[95%]  absolute bottom-0 right-0 rounded-[100px] rounded-br-none p-14  bg-white shadow-2xl">
            {component}
        </div>
    </div>
  )
}

export default TextCard