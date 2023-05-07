const PropertyImageCard = ({  location, price, bathroom, bedroom, garage}) => {
  return (
    <div className='w-full h-[400px] relative'>
        <div className="rounded-[100px] w-[95%] h-[80%] rounded-tl-none overflow-hidden">
            <img src="/construction-men-designing.jpg" alt="home" 
            className='image-style'/>
        </div>
        <div className=" h-[80%] w-[95%]  absolute bottom-0 right-0 -z-10 rounded-[50px] rounded-br-none border-4   border-blue-400 hover:bg-blue-400 hover:text-white duration-300 ">
        </div>
        <div className="grid px-6 py-2 w-[95%] h-[20%] absolute bottom-0 right-0 ">
                <div className="flex justify-between font-bold text-xl">
                    <h3 className={``}>
                        {location}
                    </h3>
                    <h3 className="">{`$ ${price}`}</h3>
                </div>
                <div className="flex justify-between">
                    <p>{`${bedroom} bedrroms`}</p> <p>{`${bathroom} bathroom`}</p> <p>{`${garage} garage`}</p>
                </div>
            </div>
</div>
  )
}

export default PropertyImageCard