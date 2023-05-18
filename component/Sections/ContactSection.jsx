import ContactForm from '../Forms/ContactForm'
import ImageCard from '../Cards/ImageCard'

const ContactSection = () => {
  return (
    <div className='section-padding2 pt-60 pb-28  grid md:grid-cols-2  gap-24 xl:gap-60 items-center'>
        <div className="">
            <ImageCard img={`/housing/steel-hut-estate.png`}/>
        </div>
        <div className=" ">
            {/* <p className='text-xl'>GET IN TOUCH</p> */}
            <h1 className='text-2xl font-bold pb-6'>Drop Us A message</h1>
            <div className="bg--blue-50 shadow-xl p-4  rounded-2xl border">
              <ContactForm/>
            </div>
           
        </div>
        
    </div>
  )
}

export default ContactSection