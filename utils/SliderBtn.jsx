import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export const SliderBtn = ({distance, scrollRef}) => {
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === '<') {
        current.scrollLeft -= distance;
      } else {
        current.scrollLeft += distance;
      }
    }
    
    return (
      <div className=" flex justify-center gap-6 ">
      {
        ['<', '>'].map((item, i) => (
          <div key={i} onClick={() => scroll(item)}
          className="flex items-center justify-center  rounded-full text-blue-400 hover-scale-110 font-semibold text-3xl ">
            {item}
          </div>
        ))
      }
    </div>    
    )
  }