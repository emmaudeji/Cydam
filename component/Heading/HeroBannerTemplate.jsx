import BtnLarge from '../btn/BtnLarge';
import Link from 'next/link'
import Image from 'next/image';

export const HeroTemplate = ({title, img, description, btnLink1, btnTxt1, btnLink2, btnTxt2}) => {
    return (
      <div className='section-padding2 items-center grid md:grid-cols-2 gap-8 lg:gap-14 xl:gap-24 '>
  
        <div className="text ">
        <h1 className=" text-[30px]  md:text-[40px] lg:text-[50px]  font-bold leading-[40px] lg:leading-[55px] pb-2">{title}
          </h1>
          <h4 className='text-xl pb-6'>{description}</h4>
          
  
          <div className='flex gap-4'>
            {btnLink1 ? <Link href={`${btnLink1}`}> <BtnLarge text={btnTxt1}/></Link> : null}
            {btnLink2 ? <Link href={`${btnLink2}`}><BtnLarge text={btnTxt2}/></Link> : null }
          </div>
        </div>
  
        <div className="imagesbox relative"> 
        <div className="bg-blue-400 w-36 h-36 rounded-full absolute top-[-60px]  right-[-60px]  hover:scale-90 duration-300">{' '}</div>
  
          <div className="rounded-[100px] lg:rounded-[150px] lg:rounded-tr-none rounded-tr-none h-[50vh] lg:h-[70vh] w-full overflow-hidden relative z-10" >
            <Image width={600} height={600} src={img} alt="herobanner-img" 
            className='w-full h-full object-cover'/>
          </div>
          <div className="z-10 border-4 border-blue-400 w-36 h-36 rounded-full absolute bottom-[-40px]  left-[-40px]  hover:scale-90 duration-300">{' '}</div>
        </div>
  
      </div>
    )
  }
  