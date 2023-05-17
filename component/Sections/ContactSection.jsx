import ContactForm from '../Forms/ContactForm'
import ImageCard from '../Cards/ImageCard'

const ContactSection = () => {
  return (
    <div className='section-padding2 py-60  grid md:grid-cols-2  gap-24 items-center'>
        <div className="">
            <ImageCard img={`/housing/steel-hut-estate.png`}/>
        </div>
        <div className="">
            <ContactForm/>
        </div>
        
    </div>
  )
}

export default ContactSection