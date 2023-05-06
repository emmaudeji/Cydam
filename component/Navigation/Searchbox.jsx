import SearchBar from './SearchBar'
import { motion, AnimatePresence } from 'framer-motion'
import { dropdownVariants } from '@/animations/DropdownVariants'
import { AiOutlineSearch } from 'react-icons/ai'
import OnClickOutside from "@/Hooks/OnClickOutside"

const Searchbox = ({showSearchBox, setShowSearchBox}) => {
  return (

    <AnimatePresence>
    {showSearchBox && <motion.div
      variants={dropdownVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
     >
        
      <OnClickOutside
        show={showSearchBox}
        onClickOutside={() => setShowSearchBox(false)}
        component={ 
        <div className='bg-blue-50 section-padding py-10 w-full h-[80vh]'>
        <div className="grid gap-4 ">

          <div className=" px-4 overflow-hidden rounded-full w-full h-14 bg-white text-black flex items-center gap-2">
            <div className="text-lg text-zinc-400 h-full  flex items-center border-r pr-2 border-zinc-300"> <AiOutlineSearch/></div>
            <input type="text" className='w-full h-full py-2' />
          </div>
          <div className="data">

          </div>
        </div> 
        </div>}/>
    </motion.div> }
   </AnimatePresence>
  )
}

export default Searchbox

export const Loading = () => {
  return (
    
<>
<div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>
    <div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>
    <div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>
    <div className='flex w-full mt-6'>
      <div className='w-[30%] h-28 bg-zinc-300'>
        {" "}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
        <div className='ml-4 w-auto h-8 bg-zinc-300'>
        {" "}
        </div>
      </div>
    </div>

</>
    
    
  )
}