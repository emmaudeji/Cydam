import {  AiOutlineProject } from "react-icons/ai"
import {MdOutlineRealEstateAgent, MdOutlineEngineering, MdConstruction, MdOutlineFactory, MdAddRoad} from "react-icons/md"

export const services = [
    {
        id: 0,
        title: `Real Estate Development`,
        link: `/services/estate`,
        icon: <MdOutlineRealEstateAgent/>,
        linkText: `Read more`,
        text: `Sustainable housing focused to promote African architecture at
        low cost with maximum luxury`
    },
    {
        id: 1,
        title: `Construction And Engineering `,
        link: `/services/construction`,
        icon: <MdConstruction/>,
        linkText: `Read more`,
        text: `From Foundations to Highways: Innovative and Modern Solutions in Construction and Building`
    },
    {
        id: 2,
        title: `Energy And Waste Management`,
        link: `/services/energy`,
        icon: <MdOutlineFactory/>,
        linkText: `Read more`,
        text: ` Co-locating wind, solar and waste to energy plants
        to save cost and increase efficiency.`
    },
    {
        id: 3,
        title: `Investment and Free Trade Zone`,
        link: `/services/investment`,
        icon: <AiOutlineProject/>,
        linkText: `Read more`,
        text: `Maximize Your Investment Returns and Achieve Your Business Goals with Expertise and Guidance.`
    },
    {
        id: 4,
        title: `Exports and Logistics `,
        link: `/services/logistics`,
        icon: <MdOutlineEngineering/>,
        linkText: `Read more`,
        text: `Drive Your Business's Growth and Maximize Your Profits with Comprehensive Export and Logistics Services.`
    },
    {
        id: 5,
        title: `Mining and Manufacturing`,
        link: `/services/mining`,
        icon: <MdAddRoad/>,
        linkText: `Read more`,
        text: `Unleashing the Power of Mining and Manufacturing: Innovative and Expertise and Solutions`
    },
    
]