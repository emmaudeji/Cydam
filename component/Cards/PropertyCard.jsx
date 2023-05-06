import React from 'react'

const PropertyCard = ({ id, location, price, bathroom, bedroom, garage}) => {
  return (
    <div className='w-full h-full'>

        <div className="border-4  border-blue-400 w-[90%] h-[400px] p-4 rounded-[100px] rounded-tl-none relative right-0">
            <div className='relative top-[-20%] '>
                <div className="w-[120%] left-0 h-[400px] rounded-[100px] rounded-br-none overflow-hidden">
                   <img src="/construction-men-designing.jpg" alt="home" 
                    className='w-full h-full object-cover'/>
                </div>
                <div className="pt-2 relative left-[20%] ">
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

                
         

        </div>
</div>
  )
}

export default PropertyCard