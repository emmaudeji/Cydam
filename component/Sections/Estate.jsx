import { estateServices } from '@/Data/estateServices'
import React from 'react'
import SectionImageCard from '../Cards/SectionImageCard'
import PlainCard from '../Cards/PlainCard'

const Estate = () => {
  return (
    <div className='section-padding py-24 grid md:grid-cols-2 gap-24 md:gap-16 lg:gap-24 xl:gap-36'>
        <div className="card">
            <SectionImageCard heading={`We Know What A Home Is Really Worth`} text={``}/>
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