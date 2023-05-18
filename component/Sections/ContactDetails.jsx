import { contact, officeHours } from "@/Data/contact"
import {MdOutlinePhone, MdOutlineLocationOn, MdOutlineEmail} from "react-icons/md"

const ContactDetails = () => {
  return (
    <div className='section-padding2 pt-24 w-full grid md:grid-cols-3 gap-10 text-white text-lg font-medium'>
           
            {
                contact?.map(({id, address,  branch, phone1, phone2, email})=> (
                    <div key={id} className="bg-blue-700 px-6 py-8">
                        <h3 className="text-2xl pb-1 border-b w-full border-white">{branch}</h3>
                        <div className="flex gap-4 pt-4">
                            <div className="text-4xl font-bold">
                                <MdOutlineLocationOn/>
                            </div>
                            <div className="">{address} </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <div className="text-4xl font-bold">
                                <MdOutlinePhone/>
                            </div>
                            <a href={"tel:+" + phone1}>{phone1}</a>  
                        </div>
                        {email ? <div className="flex gap-4 pt-4">
                            <div className="text-4xl font-bold">
                                <MdOutlineEmail/>
                            </div>
                            <a href = {"mailto: " + email}>{email}</a>  
                        </div> : null}
                    </div>
                )) }
            <div className="bg-blue-700 px-6 py-8 grid gap-4">
                <h3 className="text-2xl pb-1 border-b w-full border-white">Office Hours</h3>
                <div className="grid gap-2">
                    
                    {
                        officeHours?.map(({id, day,time}) => (
                            <div key={id} className="flex gap-4">
                            <p className="">{day}</p> <p className="">{time}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            
    </div>
  )
}

export default ContactDetails