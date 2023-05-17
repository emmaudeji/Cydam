import {useState} from 'react'
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
// import { sendEmail } from "@/hooks/sendEmail";


const ContactForm = () => {
  const [input, setInput] = useState({
    email: '',
    phonenumber: '',
    name: '',
    feedback: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    // send email through emailjs
    // sendEmail(input)


    setInput({
      email: '',
      phonenumber: '',
      name: '',
      feedback: ''
    })

    console.log('input- ---', input)
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <div className="flex gap-4 flex-col  pb-2">

        <div className="flex-1  ">
          <p className="text-zinc-400">Name</p>
          <div className="flex-1 bg-white w-full border rounded-full overflow-hidden py-4 text-zinc-400 px-4">
            <input type="text" name="name" value={input.name} placeholder="Enter your full name" 
            required
            onChange={handleChange}
            className="w-full text-black"/>
          </div>
        </div>
        

        <div className="flex-1 bg-white w-full relative border rounded-full overflow-hidden  flex gap-2 items-center text-zinc-400 px-4">
              <div className="pr-2 py-4 border-r border-zinc-400 "><p className="text-xl"><AiOutlineMail/></p></div>
              <input type="email" name="email" value={input.email} placeholder="Enter Email" 
              required
              onChange={handleChange}
              className="w-full text-black"/>
        </div>

        
          <div className="flex-1 bg-white w-full relative border rounded-full overflow-hidden  flex gap-2 items-center text-zinc-400">
            <div className="pl-4 pr-2 py-4 border-r border-zinc-400 text-xl"><AiOutlinePhone/></div>
            <input type="number" name="phonenumber" value={input.phonenumber} placeholder="Phonenumber"  required
            onChange={handleChange}
            className="text-black"/>
          </div>            
          
          <div className="flex-1">
            <p className="text-zinc-400">Feedback</p>
            <div className="flex-1 h-40 bg-white w-full border rounded-ful overflow-hidden py-4 px-4">
              <textarea type="text" name='feedback' value={input.feedback} placeholder="Enter your feedback" 
              onChange={handleChange}
              className="w-full h-full"/>
            </div>
          </div>

          <div>
          <button type="submit" className="flex px-10 py-4 border-2 rounded-full border-blue-700 hover:bg-blue-700  hover:text-white cursor-pointer duration-300">
            Submit
        </button>
        </div>
        

      </div>

      
    </form>
  )
}

export default ContactForm