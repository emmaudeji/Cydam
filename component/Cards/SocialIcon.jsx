
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const SocialIcon = ({size}) => {
  return (
    <div className={ `flex ${size==='large' ? 'text-5xl gap-4 ' : 'gap-2 text-xl'}`}>
        <div className='hover-scale-110 '>
        <AiFillFacebook/> 
        </div> 
        <div className='hover-scale-110 '>
        <AiFillInstagram/> 
        </div>
        <div className='hover-scale-110 '>
        <AiFillTwitterSquare/>
        </div>
    </div>
  )
}

export default SocialIcon