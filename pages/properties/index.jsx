import Head from "@/component/Layout/Head"
import PageHeroBanner from "@/component/Heading/PageHeroBanner"
import Newsletter from "@/component/Sections/Newsletter"
import CTAprojects from "@/component/Sections/CTAprojects"
import Property from "@/component/Sections/Property"

const Properties = () => {
  return (
    <>
    <Head title="Cydam-Property Listing"/>

    <PageHeroBanner heading='Valuable Properties' img="/housing/estate2.jpg" page={`Home > Services > Prperties`}/>
    
    <div>
    <section className="section-padding2 pt-40 pb-24 text-center">
        <h2 className="text-3xl font-bold">
        Creating Affordable Modern Homes for Everyone
        </h2>
    </section>
    <Property/>
    <CTAprojects link={`/services/estate`} btnTxt={`Find Guide`} heading={`Let's help you secure the home you have dreamed of`}/>

    <Newsletter />

    </div>
    
    </>
  )
}

export default Properties

