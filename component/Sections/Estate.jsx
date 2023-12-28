import { estateServices } from '@/Data/estateServices'
import React from 'react'
import SectionImageCard from '../Cards/SectionImageCard'
import PlainCard from '../Cards/PlainCard'

const Estate = () => {
  return (
    <div className='section-padding2 pt-40 pb-20 grid md:grid-cols-2 gap-24 md:gap-16 lg:gap-24 xl:gap-36 bg-primary'>
        <div className="card">
            <SectionImageCard heading={`We know what a home is really worth`} text={``} img={`/housing/interior1.jpg`}/>
        </div>
        <div className='grid gap-4'>
            {
                estateServices?.map(({id, title, text, icon }) => (
                    <div key={id} className="k">
                        <PlainCard title={title} text={text} icon={icon}/> 
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Estate