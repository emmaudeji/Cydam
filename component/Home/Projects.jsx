import React from 'react'
import SectionHeading from '../Cards/SectionHeading'
import { projects } from '@/Data/projects'
import SectionImageCard from '../Cards/SectionImageCard'

const Projects = () => {
  return (
    <div className='section-padding py-24  grid gap-24 '>
        <div className="flex justify-center">
            <div className="">
            <SectionHeading text={'Our Recent'} emphasis={'Projects'}/>
            </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {
                projects?.map(({ id, title, text }) => (
                    <div key={id} className="">
                        <SectionImageCard heading={title} text={text}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects