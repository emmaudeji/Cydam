import {useState} from 'react'
import SimpleInput from '../Forms/SimpleInput'
import { AiOutlineMail } from 'react-icons/ai'

const Newsletter = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        
    }

  return (
    <div className='section-padding py-24  grid gap-24'>
        <div className="relative w-full">
            <div className='flex gap-4'>
                <div className="rounded-[50px] rounded-tl-none h-80 w-80 overflow-hidden">
                    <img src="/Customer-Service.jpg" alt="customer-service" className='image-style' />
                </div>
                <div className="font-bold pt-20 hidden md:block">
                    <h4>GET INSTANT UPDATES</h4>
                    <h2 className='text-3xl'>Subcribe to our newsletter</h2>
                </div>

            </div>
            
            <div className="absolute top-40 right-0 w-[90%] rounded-[50px] rounded-tl-none bg-blue-700 grid gap-4 shadow-xl py-6 px-4 sm:px-10  ">
            
                <div className="font-bold text-white  md:hidden">
                    <h4>GET INSTANT UPDATES</h4>
                    <h2 className='text-2xl'>Subcribe to our newsletter</h2>
                </div>
                <form onSubmit={handleSubmit} 
                className='grid md:flex gap-2' >
                    <SimpleInput icon={<AiOutlineMail/>} onChange={(e)=>setEmail(e.target.value)} />
                    <div className=''>
                    <button type='submit' className='rounded-full py-4 px-6 bg-blue-600 w-40 h-full text-white' >Subcribe now</button>
                    </div>
                </form>
            
            </div>
            
            
        </div>

        
    </div>
  )
}

export default Newsletter