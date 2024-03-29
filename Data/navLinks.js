import { services } from "./services"

// export const services = [
//     {
//         id: 0,
//         title: `Construction and Engineering`,
//         link: `/construction`
//     },
//     {
//         id: 1,
//         title: `Real Estate Development`,
//         link: `/estate`
//     },
//     {
//         id: 2,
//         title: `Energy and Waste Mansgement`,
//         link: `/energy`
//     },
//     {
//         id: 3,
//         title: `Mining and Manufacturing`,
//         link: `/mining`
//     },
//     {
//         id: 4,
//         title: `Exports and Logistics`,
//         link: `/logistics`
//     },
//     {
//         id: 5,
//         title: `Investment and Free Trade Zone`,
//         link: `/investment`
//     },
// ]

export const navLinks = [
    {
        id: 0,
        title: `About us`,
        link: `/about`
    },
    {
        id: 1,
        title: `Services`,
        link: `/services`,
        subMenu: services
    },
    // {
    //     id: 5,
    //     title: `Properties`,
    //     link: `/properties`
    // },
   
    {
        id: 2,
        title: `Projects`,
        link: `/projects`
    },
    {
        id: 3,
        title: `Contact us`,
        link: `/contact`
    },
    {
        id: 4,
        title: `Blog`,
        link: `/blog`
    },
]

