import {useState} from 'react'
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
// import { sendEmail } from "@/hooks/sendEmail";


const ContactForm = () => {
  const [input, setInput] = useState({
    email: '',
    phonenumber: '',
    name: '',
    message: '',
    subject: ''
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
      message: '',
      subject: ''
    })

    console.log('input- ---', input)
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <div className="grid gap-2 ">
        {
          inputLabel?.map(({id, placeholder, label, key, required, type, textarea}) => { 
            if (textarea === true ) {
              return (
                <div key={id}>
                  <p className="pb-2">{label}</p>
                  <div className="w-full border rounded-lg overflow-hidden py-2 px-6">
                    <textarea type={type} name={key} value={input.key} placeholder={placeholder}
                    required={required}
                    onChange={handleChange}
                    className="w-full h-24"/>
                  </div>
                </div> 
            )
            } else {
              return (
                <div key={id}>
                  <p className="pb-2">{label}</p>
                  <div className="w-full border rounded-full overflow-hidden py-2 px-6">
                    <input type={type} name={key} value={input.key} placeholder={placeholder}
                    required={required}
                    onChange={handleChange}
                    className="w-full"
                    />
                  </div>
                </div> 
            )
            }
            }
          )
        }

          <div>
          <button type="submit" className="flex px-10 py-4 border-2 rounded-full border-blue-400 hover:bg-blue-400  hover:text-white cursor-pointer duration-300">
            Submit
        </button>
        </div>
        

      </div>

      
    </form>
  )
}

export default ContactForm

export const inputLabel = [
  {
    id: 0,
    label: 'Name',
    placeholder: 'Enter full name',
    key: 'name', 
    type: "text",
    required: 'required',
    style: ''
  },
  {
    id: 1,
    label: 'Email',
    placeholder: 'Enter email',
    key: 'email', 
    type: "email",
    required: 'required',
    style: ''
  },
  {
    id: 2,
    label: 'Phone number',
    placeholder: 'Enter phone number',
    key: 'phonenumber', 
    type: "number",
    required: 'required',
    style: ''
  },
  {
    id: 3,
    label: 'Subject',
    placeholder: 'Enter subject',
    key: 'subject', 
    type: "text",
    // required: 'required',
    style: ''
  },
  {
    id: 4,
    label: 'Message',
    placeholder: 'Enter message',
    key: 'message', 
    type: "text",
    required: 'required',
    style: '',
    textarea: true
  },
]