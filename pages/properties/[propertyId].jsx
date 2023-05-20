import {useState, useEffect} from 'react'
import { propertyList } from '@/Data/propertyList'
import Property from '@/component/Sections/Property'
import Head from '@/component/Layout/Head'
import PageHeroBanner from '@/component/Heading/PageHeroBanner'
import Newsletter from '@/component/Sections/Newsletter'
import Image from 'next/image'
import BtnCTAwhite from '@/component/btn/BtnCTAwhite'
import BtnCTAblue from '@/component/btn/BtnCTAblue'



const propertyId = ({data}) => {
  const [property, setProperty] = useState(data)
  const [showImage, setShowImage] = useState(property[0].img)

  useEffect(() => {
    setProperty(data)
    setShowImage(data[0].img)
  }, [data])
  
console.log(data)
  return (
    <>
        <Head title="Cydam - Project"/>
        <PageHeroBanner heading='Detail Listing' img="/housing/estate2.jpg" page={`Home > Properties > Property`}/>

        <div className=' '>
            {
              property?.map(({ id, img, intro, propertyType, location, price, lotSize, description, bedrooms, additionalFeatures, contactInformation, imgList,}) => {
               
                const labels = [{title: 'Location:', type: location}, {title: 'Price:', type: price}, {title: 'Plot Size:', type: lotSize}, {title: 'Bedrooms:', type: bedrooms}]

                return (
                <div className="" key={id}>

                    <section className="section-padding2 pt-48 pb-10 bg-blue-50 w-full">
                      <h2 className="text-3xl font-bold pb-8">
                          {propertyType}
                      </h2>

                      <div className="flex flex-col sm:flex-row gap-4 w-full justify-between flex-wrap pb-8">
                      {
                        labels?.map(({title, type}) => (
                          <div className="flex-1 flex gap-2" key={title}>
                            <p>{title}</p>
                            <p>{type}</p>
                          </div>
                        ))
                      }
                      </div>

                      <BtnCTAblue link={'/payment'} text={'Buy Now'}/>
                    </section>

                    <section className="w-full h-[500px] sm:h-[600px] overflow-hidden">
                        <Image width={400} height={500} src={showImage} alt="property" 
                          className="w-full h-full object-cover"
                        />
                    </section>

                    <section className='section-padding2 py-10 flex gap-4 '>
                          {
                            imgList?.map((item, i) => {
                              console.log(item)
                              return (
                              <div className="w-80 h-40 overflow-hidden"  key={i} onClick={() => setShowImage(item)}> 
                                <Image width={300} height={300} src={item} alt="property" 
                                    className="w-full h-full object-cover" 
                                  />
                              </div>
                            )})
                          }
                    </section>

                    <section className="bg-blue-700 py-24 text-white">
                      <div className="section-padding2 grid gap-4">
                        <h4 className='text-xl font-semibold '>Details</h4>
                        <p className="text-base">{description}</p>
                        <div className="">
                          <h4 className='text-xl font-semibold'>Additional Features</h4>
                          <p className="text-base">{additionalFeatures}</p>
                        </div>
                        <p>Caution: This is a fake data used to test this application.</p>
                        <div className="flex justify-center">
                          <BtnCTAwhite link={`/payment`} text={`Buy Now`}/>
                        </div>
                      </div>
                      
                    </section>
                </div> ) }
              )
            }

        <Property />

        <Newsletter/>
        </div>
    </>
    
  )
}

export default propertyId


export const getServerSideProps  = async ({params}) => {
    const id = Number(params.propertyId)
    console.log('iiiii----', id,   'p--', params )
    const data = propertyList?.filter(items => items.id === id)
  
  console.log(data)
    return {
      props: {
        data: data,
        id: id
      }
    }
  }