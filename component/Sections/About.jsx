import TextCard from "../Cards/TextCard"
import GridNotes from "../Cards/GridNotes"
import { useState } from "react"

const About = () => {
  return (
    
    <div className="section-padding2 pt-52 pb-40 w-full bg-blue-50">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="img">
                <TextCard heading='Leading Company in Construction and Real Estate Development '
                component={<AboutCompany/>}
                />
            </div>

            <div>
                <GridNotes note1='Providing Housing and Development Services at low cost' note2='Global Partnership for Building and Construction of Urban Projects' img1='/construction/project03-650x700.jpg' img2='/construction/project05-650x700.jpg'/>
            </div>

        </div>
    </div>
  )
}

export default About


export const AboutCompany = () => {
    const [index, setIndex] = useState(0)
    
    const aboutlist = [<Vision/>, <Mission/>, <Philosophy/>,]
    return (
        <div className="grid gap-4">
            {/* heading */}
            <div className="flex gap-2">
                {
                    ['Vision', 'Mission', 'Philosopy'].map((item, i) => (
                        <div onClick={()=>setIndex(i)} 
                        className={`py-2 px-3 rounded-full border-2 border-blue-400 hover:bg-blue-400 duration-300 hover:text-white cursor-pointer ${index===i ? "bg-blue-400 text-white" : ''}`} key={i}>
                            <p>{item}</p>
                        </div>
                    ))
                }
            </div>
            {/* text */}
            <div className="">
                {
                    aboutlist[index]
                }
            </div>
        </div>
    )
}

export const Vision = () => (
    <div className="grid gap-3">
        <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sed, beatae inventore cupiditate quaerat 
        </p>
        <p>
            Adipisicing elit. Repellat voluptas ratione nihil. Nulla quae deleniti unde dolore excepturi magni quis? Repudiandae, iste? Minima a accusamus dolores beatae optio tempore!
        </p>
        <div className="flex gap-6 font-semibold text-blue-200 text-sm">
            <p>Reliable</p><p>Quality</p><p>Affordable</p>
        </div>
    </div>
)
export const Mission = () => (
    <ul className="grid gap-3">
        <li className="">
 inventore cupiditate quaerat eveniet fuga aspernatur debitis iste quae.
        </li>
        <li>
            Repellat voluptas ratione nihil. Nulla quae deleniti unde dolore accusamus dolores beatae optio tempore!
        </li>
        <li>
            Adipisicing elit. Repellat voluptas ratione nihil. Nulla quae Repudiandae, iste? Minima a accusamus dolores beatae optio tempore!
        </li>
        <div className="flex gap-6 font-semibold text-blue-200 text-sm">
            <p>Reliable</p><p>Quality</p><p>Affordable</p>
        </div>
    </ul>
)
export const Philosophy = () => (
    <div className="grid gap-3">
        <p className="">
            consectetur adipisicing elit. Recusandae sed, beatae inventore cupiditate quaerat eveniet fuga aspernatur debitis iste quae.
        </p>
        <p>
             atione nihil. Nulla quae deleniti unde dolore excepturi magni quis? Repudiandae, iste? Minima a accusamus dolores beatae optio tempore! Repellat voluptas r
        </p>
        <div className="flex gap-6 font-semibold text-blue-200 text-sm">
        <p>Affordable</p> <p>Reliable</p><p>Quality</p>
        </div>
    </div>
)
