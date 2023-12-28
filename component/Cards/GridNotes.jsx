import React from 'react'

const GridNotes = ({note1, note2, note3, img1, img2}) => {
  return (

    <div className="h-full w-full text-white grid sm:grid-cols-2 sm:gap-4 text-xl  font-semibold ">
                   
                    <div className="bg-blue-700  h-52 sm:min-h-full  flex px-6 items-center   sm:text-right sm:rounded-[50px] sm:rounded-br-none">
                            {note1}
                        </div>
                   
                    <div className="relative">
                        <div className="h-80 sm:h-[90%] sm:rounded-[50px] sm:rounded-bl-none sm:absolute bottom-0 w-full overflow-hidden">
                        <img src={img1} alt="city" className='image-style'/>
                        </div>
                    </div>
                   
                        <div className="sm:hidden bg-blue-700  h-52 sm:min-h-[250px] flex px-6 items-center  sm:text-right sm:rounded-[50px] sm:rounded-br-none">
                           {note2}
                        </div>
                    
                   
                        <div className="h-80 sm:h-[90%]  sm:rounded-[50px] sm:rounded-tr-none overflow-hidden">
                        <img src={img2} alt="city" className='image-style'/>
                        </div>
                 
                  
                        <div className="bg-blue-700 h-52 sm:min-h-full flex px-6 items-center sm:rounded-[50px] sm:rounded-tl-none">
                            {note3}
                        </div>
                 
                </div>

    
  )
}

export default GridNotes