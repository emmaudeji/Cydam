import React from 'react'
import SectionHeading from '../Cards/SectionHeading'
import { projects } from '@/Data/projects'
import ProjectImageCard from '../Cards/ProjectImageCard'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='section-padding2 pt-20 pb-40  grid gap-24 '>
        <div className="flex justify-center">
            <div className="">
            <SectionHeading whitebg={true} text={'Our Recent'} emphasis={'Projects'}/>
            </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {
                projects?.map(({ id, title, text, img }) => (
                    <Link href={`projects/${id}`} key={id} className="w-full" >
                        <ProjectImageCard img={img} border={'blue'} heading={title} text={text}/>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Projects