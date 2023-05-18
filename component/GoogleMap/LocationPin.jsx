import { FaMapMarkerAlt } from "react-icons/fa"

const LocationPin = ({text}) => {
  return (
    <div className="grid gap-2">
        <div className="text-4xl font-bold text-red-500">
            <FaMapMarkerAlt/>
        </div>
        
        <div className='p-3 bg-blue-200 rounded-md w-40 md:w-[260px] '>
        {text}
        </div>
    </div>
    
  )
}

export default LocationPin