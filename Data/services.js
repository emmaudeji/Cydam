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
        title: `Construction and Engineering `,
        link: `/services/construction`,
        icon: <MdConstruction/>,
        linkText: `Read more`,
        text: `From foundations to highways: innovative and modern solutions in construction and building`
    },
    {
        id: 2,
        title: `Energy and Waste Management`,
        link: `/services/energy`,
        icon: <MdOutlineFactory/>,
        linkText: `Read more`,
        text: ` Co-locating wind, solar and waste to energy plants to save cost and increase efficiency.`
    },
    {
        id: 3,
        title: `Investment and Free Trade Zone`,
        link: `/services/investment`,
        icon: <AiOutlineProject/>,
        linkText: `Read more`,
        text: `Maximize your investment returns and achieve your business goals with expertise and guidance.`
    },
    {
        id: 4,
        title: `Exports and Logistics `,
        link: `/services/logistics`,
        icon: <MdOutlineEngineering/>,
        linkText: `Read more`,
        text: `Drive your business's growth and maximize your profits with comprehensive export and logistics services.`
    },
    {
        id: 5,
        title: `Mining and Manufacturing`,
        link: `/services/mining`,
        icon: <MdAddRoad/>,
        linkText: `Read more`,
        text: `Unleashing the power of mining and manufacturing: Innovative and expertise and solutions`
    },
    
]