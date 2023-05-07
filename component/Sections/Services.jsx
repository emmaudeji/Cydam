import SectionHeading from "../Cards/SectionHeading"
import { services } from "@/Data/services"
import ServiceCard from "../Cards/ServiceCard"

const Services = () => {
  return (
    <div className="section-padding py-24 w-full bg-blue-700">
        <div className="w-full flex justify-center pb-20">
            <div >
                <SectionHeading text={'Unvarying Quality '} emphasis={`Services`}/>
            </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {
                services?.map(({text, linktext, icon, link, title, id }) => (
                    <div key={id} className="">
                        <ServiceCard text={text} linktext={linktext} icon={icon} link={link} title={title} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services