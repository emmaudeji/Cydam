import React from 'react'

const GridNotes = ({note1, note2, note3, img1, img2}) => {
  return (
    <div className="capitalize  grid sm:grid-cols-2 text-white gap-4 ">
                
                <div className="h-56 sm:h-64 md:h-80  sm:text-end px-10 bg-secondary sm:rounded-[60px] sm:rounded-br-none flex items-center justify-center">
                    <h3 className='font-bold md:text-2xl xl:text-3xl text-3xl '> {note1}</h3>
                  
                </div>
                <div className="  sm:mt-8 sm:rounded-[60px] sm:rounded-bl-none overflow-hidden h-56 sm:min-h-64 ">
                    <img src={img1} alt="city" className='image-style'/>
                </div>
               
                {
                    note3 ? (
                        <div className="h-56 sm:min-h-64  px-10 bg-secondary sm:rounded-[60px] sm:rounded-tr-none flex items-center justify-center ">
                            <h3 className='font-bold text-3xl md:text-2xl xl:text-3xl'> {note3}</h3>
                        </div>
                    ) : ''
                }

                <div className={`${note3 ? 'sm:hidden' : ''} sm:mb-8 sm:rounded-[60px] h-56 sm:min-h-64  sm:rounded-tr-none overflow-hidden`}>
                         <img src={img2} alt="city" className='image-style'/>
                </div>
               

                <div className="h-56 sm:h-64 md:h-80 px-10 bg-secondary sm:rounded-[60px] sm:rounded-tl-none flex items-center justify-center">
                <h3 className='font-bold text-3xl md:text-2xl xl:text-3xl'> {note2}</h3>
                   
                </div>
            </div>
  )
}

export default GridNotes