import Head from "@/component/Layout/Head"
import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Newsletter from "@/component/Sections/Newsletter"
import Projects from "@/component/Sections/Projects"

const Project = () => {
  return (
    <>
    <Head title="Cydam Global - Projects"/>

    <PageHeroBanner heading='Recent Projects' img="/housing/estate2.jpg" page={`Home > Services > Projects`}/>
    
    <div>
    <section className="section-padding2 pt-40 pb-24 bg-blue-50 ">
        <h2 className="text-3xl font-bold">
            Transforming Africa with Cutting-Edge Technology and Expertise
        </h2>
    </section>
    <Projects/>
    <Newsletter />

    </div>
    
    </>
  )
}

export default Project

