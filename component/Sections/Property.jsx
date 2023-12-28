import { propertyList } from '@/Data/propertyList'
import PropertyImageCard from '../Cards/PropertyImageCard'
import SectionHeading from '../Cards/SectionHeading'
import Link from 'next/link'

const Property = () => {
  return (
    <div className='section-padding2 pt-20 pb-40 grid gap-24 bg-primary'>
        <div className="flex justify-center">
            <div className="">
            <SectionHeading whitebg={true} text={'Our Featured'} emphasis={'Properties'}/>
            </div>
        </div>

        {/* <div className="grid gap-x-10 gap-y-28 sm:grid-cols-2 lg:grid-cols-3">
            {
                propertyList?.map(({ id, img, location, propertyType, price, bathrooms, bedrooms, }) => (
                    <Link href={`/properties/${id}`} key={id} className="">
                        <PropertyImageCard img={img} location={location} price={price} bathroom={bathrooms} bedroom={bedrooms} propertyType={propertyType} />
                    </Link >
                ))
            }
        </div> */}
        <h3 className="h-96 w-full px-4 flex justify-center items-center text-2xl italic" >
            No open listing at the moment. Check back later.
        </h3>
    </div>
  )
}

export default Property