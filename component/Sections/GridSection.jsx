import React from 'react'
import ImageCard from '../Cards/ImageCard'
import Link from 'next/link'
import { BiBath, BiLocationPlus, BiMoney, BiSquare } from 'react-icons/bi'
import { FaLocationArrow, FaLock } from 'react-icons/fa'
import { IoBed, IoLocation } from 'react-icons/io5'

const GridSection = ({ img, intro, propertyType, location, price, lotSize, description, bedrooms, }) => {
  return (
    <section className=' section-padding2 pt-48 pb-24 grid  md:grid-cols-2 gap-24 md:gap-10  xl:gap-36'>

    <div className="">
        <ImageCard img={img}/>
    </div>
    
  
    <div className="grid gap-6">
        <h4 className='text-xl font-semibold text-blue-700'>Overview</h4>
        <h2 className='text-2xl font-bold' >{propertyType}</h2>
        <p > {intro}</p>

        <div className='grid '>
          <div className='flex justify-between '>
            <div className='flex flex-coll sm:flex-row gap-2 items-center'>
              <div><BiMoney size={30}/></div>
              <div>{price} {``}</div>
            </div>
            <div className='grid '>
              <div><IoLocation size={25}/></div>
              <div>{location} {``}</div>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='grid '>
              <div><IoBed size={25}/></div>
              <div>{bedrooms} {` bedrooms`}</div>
            </div>
            <div className='grid '>
              <div><FaLock/></div>
              <div>{lotSize} {``}</div>
            </div>
          </div>

          {/* <div className='flex justify-between'>
            <div className='grid '>
              <div>Icon</div>
              <div>{lotSize} {``}</div>
            </div>
            <div className='grid '>
              <div>Icon</div>
              <div>{location} {``}</div>
            </div>
          </div> */}
        </div >

        <div className="flex justify-center w-full">
          <div>
              <Link href={'/quote'} className="rounded-full bg-blue-700 py-4 px-10 hover:scale-105 duration-300 text-white ">Get it Now</Link>
          </div>
        </div>

    </div>
    
   
  
  
  </section>
  )
}

export default GridSection