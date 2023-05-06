import { propertyList } from '@/Data/propertyList'
import PropertyCard from '../Cards/PropertyCard'
import SectionHeading from '../Cards/SectionHeading'

const Property = () => {
  return (
    <div className='section-padding py-24  grid gap-24'>
        <div className="flex justify-center">
            <div className="">
            <SectionHeading text={'Our Featured'} emphasis={'Propersties'}/>
            </div>
        </div>

        <div className="grid gap-x-10 gap-y-28 sm:grid-cols-2 lg:grid-cols-3">
            {
                propertyList?.map(({ id, location, price, bathroom, rooms, garage, }) => (
                    <div key={id} className="">
                        <PropertyCard  location={location} price={price} bathroom={bathroom} bedroom={rooms} garage={garage}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Property