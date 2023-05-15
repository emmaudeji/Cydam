import { FaRocket, FaHandsHelping, FaIndustry, FaDollarSign } from 'react-icons/fa'
import {FiWind} from 'react-icons/fi'
import {BsCheckCircleFill} from 'react-icons/bs'
import {RiPlantFill} from 'react-icons/ri'
import { AiOutlineSmile } from 'react-icons/ai'


export const ServicesWorks = {
    estate: [
        {
            id: 0,
            icon: <FaRocket /> ,
            title: `Innovation and Quality`,
            text: `We use latest technology and building practices to ensure our structures are of the highest quality. `
        },
        {
            id: 1,
            icon: <FiWind/>,
            title: `Sustainable Engineering`,
            text: `We Build homes that are eco-friendly, energy-efficient, durable and efficient `
        },
        {
            id: 2,
            icon: <FaDollarSign/>,
            title: `	
            Affordable Value`,
            text: `We are passionate about making the middle class house owners without compromizing quality.`
        },
        {
            id: 3,
            icon: <FaHandsHelping/>,
            title: `Community Engagement`,
            text: `We priotize our communities and support local initiatives that impact the lives of residents.`
        },
    ],    
}

export const ValuesConstruction = [
    {
        id: 0,
        icon: <FaIndustry /> ,
        title: `Innovative Steel:`,
        text: `Improving Efficiency, Reducing Costs, and Building Better Futures. `
    },
    {
        id: 1,
        icon: <BsCheckCircleFill/>,
        title: `Exceptional Quality`,
        text: `We Take Pride in Every Detail of Our Work and maximize quality.`
    },
    {
        id: 2,
        icon: <RiPlantFill/>,
        title: `	
        Sustainable Materials:`,
        text: `Building Responsibly for a Greener Tomorrow.`
    },
    {
        id: 3,
        icon: <AiOutlineSmile/>,
        title: `Client Satisfaction:`,
        text: `Our Success Depends on Your Satisfaction.`
    },
]