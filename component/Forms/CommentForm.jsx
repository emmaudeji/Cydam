import {useState} from 'react'
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
// import { sendEmail } from "@/hooks/sendEmail";
import { useStateContext } from "@/contextHook/StateContext"
import { formattedDate } from '@/utils/dateFormating';


const CommentForm = ({setNewComment}) => {
  const {blogData, setBlogData, addBlogComment} = useStateContext()
  const [input, setInput] = useState({
    email: '',
    user: '',
    comment: '',
    date: formattedDate
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value,
        date: formattedDate
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewComment(p=>!p)
    addBlogComment(input)

    // console.log('blog', blogData)
    // send email through emailjs
    // sendEmail(input)
    

    setInput({
      email: '',
      user: '',
      comment: '',
      date: ''
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
                  <div className="w-full border rounded overflow-hidden py-2 px-6">
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

export default CommentForm

export const inputLabel = [
  {
    id: 0,
    label: 'Name',
    placeholder: 'Enter full name',
    key: 'user', 
    type: "text",
    required: 'required',
    style: ''
  },
  {
    id: 2,
    label: 'Email',
    placeholder: '',
    key: 'email', 
    type: "email",
    required: 'required',
    style: ''
  },

  {
    id: 4,
    label: 'Comment',
    placeholder: 'Enter comment',
    key: 'comment', 
    type: "text",
    required: 'required',
    style: '',
    textarea: true
  },
]