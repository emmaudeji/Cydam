import { team } from '@/Data/team'
import TeamImageCard from '../Cards/TeamImageCard'

const Team = () => {
  return (
    <div className="section-padding w-full bg-primary">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:items-center">

            <div className="">
                <div className='grid gap-4'>
                    <h4 className="text-3xl font-bold">
                        Our Experienced <span className='text-tertiary'>Team</span> 
                    </h4>
                    <h2 className='text-xl'>
                        We have a team of experienced and humanity-centered professionals in different fields of Engineering, Business, IT, and Human Development. 
                    </h2>
                </div>
            </div>

            <div className='md:col-span-2 lg:col-span-3 overflow-auto'>

                <div className="flex gap-8 ">
                    {
                        team?.map(({id, name, title, img, fb, ln}) => (
                                <div key={id}>
                                    <div className="w-80">
                                        <TeamImageCard name={name} title={title} img={img} fb={fb} ln={ln}/>
                                    </div>
                                </div>
                        ))
                    }
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Team