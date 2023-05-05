import {useState} from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  const heroList = [
    <HeroBanner1/>, <HeroBanner2/>, <HeroBanner3/>
  ]

  const [index, setIndex] = useState(0);

  const handleClick = (sign) => {
  if (sign === 1) {
    if (index === 0) {
      setIndex(heroList.length - 1)
    } else {
      setIndex(index => index - 1)
    }
  } else if (sign === 2) {
    if (heroList.length - 1 === index) {
      setIndex(0)
    } else {
      setIndex(index => index + 1)
    }
  }
  }

  return (
    <div className=' h-[100vh] capitalize relative'>
      {heroList?.length && heroList[index]}
       <div className='flex gap-2 justify-center pt-3 '>
            <h1 className="text-2xl cursor-pointer py-21 px-2 rounded-full hover:scale-150" onClick={() => handleClick(1)}>{'<'}</h1>
            <h1 className="text-2xl cursor-pointer py-21 px-2 rounded-full hover:scale-150" onClick={() => handleClick(2)}>{'>'}</h1>
          </div>
    </div>
  )
}

export default HeroBanner




export const HeroBannerTemplate = ({img, title, description, btnTxt, btnLink}) => {

  return (
    <div className=' h-[100vh] capitalize relative'>

      {/* background image */}
      {/* <div className='w-full h-full overflow-hidden'>
        <img src="" alt="herobanner" 
        className='object-cover w-full h-full'/>
      </div> */}

      <div className="h-[85vh] w-full flex items-center bg-zinc-300">
        <div className='section-padding grid gap-2'>
          <p className='font-bold'>{description}</p>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <div >
            <div className="flex gap-3">
            <p className='text-center px-6 py-4 bg-yellow-400 '>{btnTxt} <span>{`>`}</span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}




export const HeroBanner1 = ({}) => {
  return (
    <HeroBannerTemplate title={'We build the Home of your dream'} description={'An integrated design'} btnTxt={'All Projects'} btnLink={'/project'}/>
  )
}

export const HeroBanner2 = ({}) => {
  return (
    <HeroBannerTemplate title={'We build the Home of your dream'} description={'An integrated design'} btnTxt={'All Projects'} btnLink={'/project'}/>
  )
}

export const HeroBanner3 = ({}) => {
  return (
    <HeroBannerTemplate title={'We build the Home of your dream'} description={'An integrated design'} btnTxt={'All Projects'} btnLink={'/project'}/>
  )
}