import { propertyList } from '@/Data/propertyList'
import PropertyImageCard from '../Cards/PropertyImageCard'
import SectionHeading from '../Cards/SectionHeading'

const Property = () => {
  return (
    <div className='section-padding2 pt-20 pb-40 grid gap-24 bg-primary'>
        <div className="flex justify-center">
            <div className="">
            <SectionHeading whitebg={true} text={'Our Featured'} emphasis={'Properties'}/>
            </div>
        </div>

        <div className="grid gap-x-10 gap-y-28 sm:grid-cols-2 lg:grid-cols-3">
            {
                propertyList?.map(({ id, img, location, price, bathroom, rooms, garage, }) => (
                    <div key={id} className="">
                        <PropertyImageCard img={img} location={location} price={price} bathroom={bathroom} bedroom={rooms} garage={garage}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Property