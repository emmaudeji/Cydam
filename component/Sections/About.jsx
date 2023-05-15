import { useState } from "react"

export const AboutCompany = () => {
    const [index, setIndex] = useState(0)
    
    const aboutlist = [<Vision/>, <Mission/>, <Philosophy/>,]
    return (
        <div className="grid gap-4">
   
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
          
            <div className="capitalize">
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
        Welcome to our company, where we believe that everyone deserves a modern, affordable, and sustainable home.  Our vision is to build a better future, one home at a time, and we invite you to join us on this journey.
        </p>
        <p>
        We are proud to offer real estate development, construction, and engineering services that utilize innovative cold-rolled steel technology to reduce costs and improve efficiency.
        </p>
        <div className="flex gap-6 font-semibold text-blue-200 text-sm">
            <p>Reliable</p><p>Durable</p><p>Affordable</p>
        </div>
    </div>
)
export const Mission = () => (
    <ul className="grid gap-3">
        <li className="">
        To make affordable, sustainable, and modern housing accessible to everyone, using innovative and best-in-class construction practices.
        </li>
        <li>
        To transform the real estate industry in Africa by delivering exceptional value and quality to our clients through our commitment to innovation, sustainability, and affordability.
        </li>
        <li>
        To build a better future for African communities by developing homes that are not only eco-responsible, but also functional, beautiful, and durable.
        </li>
        
    </ul>
)
export const Philosophy = () => (
    <div className="grid gap-3">
        <p className="">
        We believe Sustainable development and responsible construction practices are key to building a brighter future for Africa.
        </p>
        <p>
        We believe that by combining cutting-edge technology with a deep understanding of our clients' needs, we can create homes and communities that are truly transformative.
        </p>
        <p>We Believe in Success through exceptional value and lasting relationships.</p>
        
    </div>
)
