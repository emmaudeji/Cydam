import Slider from "react-slick";
import { SimpleSlider } from "@/Hooks/SimpleSlider";
import { testimony } from "@/Data/testimony";

const TestimonyCard = ({heading, }) => {

    
    return (
      <div className='w-full h-[500px] relative'>
          <div className="rounded-[100px] w-[95%] h-[80%] rounded-tl-none border-4  border-blue-400">
          </div>
          
          <div className="h-[80%] w-[95%]  absolute bottom-0 right-0 rounded-[100px] rounded-br-none p-14  bg-white flex items-center ">
              <div className="relative">
                <h1 className="text-[16em] text-blue-200 absolute top-[-90px] left-[-13px]">
                  "
                </h1>
                {/* <Slider {...SimpleSlider}>  */}
                {testimony.slice(0,1)?.map(({id, text,img, name, title }) => (
                   
                    <div key={id}>
                        <p className="text-lg mt-20 pb-4">
                       {text}
                        </p>
                        <div className="flex gap-4 items-center">
                        <div className="rounded-full h-24 w-24 bg-secondary overflow-hidden">
                            <img src={img} alt="" className="image-style"/>
                        </div>
                        <h5 className="text-lg font-bold text-secondary">{name}</h5>
                        </div>
                    </div>   
                    // </Slider>
                ))   
                }
             
              </div>
          </div>
  
          <div className="flex items-center px-10 pt-4 w-[95%] h-[20%] absolute top-0 left-0 ">
              <h3 className={`text-3xl font-bold`}>
                  {heading}
              </h3>
  
          </div>
      </div>
    )
  }
  
  export default TestimonyCard