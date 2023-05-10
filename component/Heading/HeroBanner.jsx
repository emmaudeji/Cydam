import {useState} from 'react'
import Link from 'next/link'
import {herobannerLinks} from '../../Data/herobannerLinks'
import Slider from "react-slick";

import { HeroTemplate } from './HeroBannerTemplate';


const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='w-full  py-40  flex items-center bg-primary '>
      <div>
        {/* <Slider {...settings}> */}
        {herobannerLinks?.map(({ id, title, img, description, btnLink1, btnText1, btnLink2, btnText2}) => {
            return (
              <div key={id}>
                <HeroTemplate title={title} img={img} description={description} btnLink1={btnLink1} btnTxt1={btnText1} btnLink2={btnLink2} btnTxt2={btnText2}/>
              </div>
            )
          })}
      {/* </Slider> */}

      </div>
        
    </div>
  )
}

export default HeroBanner


