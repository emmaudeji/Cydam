import { useRouter } from "next/router"
import Head from "@/component/Layout/Head"
import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import { projects } from "@/Data/projects"
import Image from "next/image"
import Link from "next/link"
import Newsletter from "@/component/Sections/Newsletter"

const ProjectId = () => {
  const router = useRouter()
 
  const page =  projects?.filter(item => item.id === Number(router.query.projectId)) 

  const x = projects[router.query.projectId]

  const {id, img, imgList, relatedProject, partners, clients, details, heading,  projectType} = x

  // console.log(page)

  const tags = [{title: 'Project Type', type: projectType}, {title: 'Clients', type: clients}, {title: 'Partners', type: partners}]

  // console.log(projects[router.query.projectId], router.query.projectId, 'projectlist', projects, 'page--', page)

  return (
    <>
    <Head title="Cydam - Project"/>
    <PageHeroBanner heading='Cutting-Edge Technology' img="/housing/estate2.jpg" page={`Home > Projects > Project`}/>

    <div className="pt-20">

    <section className="section-padding2 py-24 bg-blue-50 w-full">
        <h2 className="text-3xl font-bold pb-8">
            {heading}
        </h2>
        <div className="flex flex-col sm:flex-row w-full gap-4">
          {
            tags?.map(({type, title}) => (
              <div key={title} className="py-8 w-full text-center border border-black rounded-lg">
                <h4 className="text-xl font-bold">{title}</h4>
                <p>{type}</p>
              </div>
            ))
          }
        </div>
    </section>

    <section className="">
      <div className="w-full h-[500px] sm:h-[600px] overflow-hidden">
      <Image width={400} height={500} src={img} alt="project" 
            className="w-full h-full object-cover"
          />
      </div>
    </section>

    <section className="section-padding2 py-24 w-full grid gap-6">
      {
        details?.slice(0,3)?.map((item, i) => (
          <div key={i} className="">{item}</div>
        ))
      }
    </section>

    <section className="section-padding2 pb-24 w-full flex flex-col sm:flex-row gap-4">
      {
        imgList?.map((item, i) => (
          <div key={i} className="w-full h-80 lg:h-[400px] overflow-hidden">
              <Image width={400} height={400} src={item} alt="project" 
                className="w-full h-full object-cover"
              />
          </div>
        ))
      }
    </section>

    <section className="section-padding2 pb-24 w-full grid gap-6 border-b ">
      {
        details?.slice(3)?.map((item, i) => (
          <div key={i} className="">{item}</div>
        ))
      }
    </section>

    <section className="section-padding2 py-14 w-full flex justify-between">
      <Link href={`/projects/${id === 0 ? projects.length - 1 : id-1}`} className="rounded-full py-4 px-6 text-bold hover-scale-blue border border-blue-700">
        Previous
      </Link >
      <Link href={`/projects/${id === projects.length - 1 ? 0 : id+1}`} className="rounded-full py-4 px-10 text-bold hover-scale-blue border border-blue-700">
        Next
      </Link >

    </section>

    <section className="section-padding2 py-24 bg-blue-700 w-full text-center">
        <h2 className="text-3xl font-bold pb-8 text-white">
            Trust Us to handle your project with cutting-edge tech innovation
        </h2>
        <Link href={`/quote`} className="rounded-full text-white text-lg hover:scale-105 duration-300 border-white border py-4 px-10">
          Get A Quote
        </Link>
    </section>


    <section className="section-padding2 pt-24">
      <h3 className="text-3xl font-bold pb-6">
        Related Projects
      </h3>
      <div className="w-full flex flex-col sm:flex-row gap-4">
      {
        relatedProject?.map((item, i) => (
          <div key={i} className="w-full h-80 lg:h-[400px] overflow-hidden">
              <Image width={400} height={400} src={item} alt="project" 
                className="w-full h-full object-cover"
              />
          </div>
        ))
      }
      </div>
    </section>
      <Newsletter/>
    </div>
      
    </>
  )
}

export default ProjectId