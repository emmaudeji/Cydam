import {MdOutlinePhone, MdOutlineLocationOn, MdOutlineEmail} from "react-icons/md"

export const officeHours = [
    {
        id: 0,
        day: 'Monday',
        time: '8am - 5pm',
    },
    {
        id: 1,
        day: 'Tuesday',
        time: '8am - 5pm',
    },
    {
        id: 2,
        day: 'Wednesday',
        time: '8am - 5pm',
    },
    {
        id: 3,
        day: 'Thursday',
        time: '8am - 5pm',
    },
    {
        id: 4,
        day: 'Friday',
        time: '8am - 5pm',
    },
    {
        id: 5,
        day: 'Saturday',
        time: '10am - 2pm',
    },
]


export const contact = [
    {
        id: 0,
        address: `Florasvej 13, 2nd Floor Left, 2600 Glostrup, Demark`,
        branch: `Denmark Office`,
        phone1: +4581869997,
        phone2: ``,
        email: `info@cydamgroup.org`,
        // label: 'Denmark Address'
    },
    {
        id: 1,
        address: `16 Nkwere Crescent Area 11 Garki Abuja, Nigeria`,
        branch: `Abuja Office`,
        phone1: +2349019370870,
        phone2: +2349096717062,
        email: `info@cydamgroup.org`,
        // label: 'Abuja Address'
    },
]

export const Contact = ({contactlist=contact }) => {
   
    return (
        <div className="grid gap-2">
            {contactlist?.map(({id, email, address, branch, phone1, phone2}) => (
                <div className="" key={id}>
                    <div className="flex gap-2">
                        <p><MdOutlineLocationOn/></p>
                        <p>{address}</p>
                    </div>
                    <div className="flex gap-2">
                        <p><MdOutlinePhone/></p>
                        <div className="flex gap-2 flex-wrap">
                            {phone1 ? <a href={"tel:+" + phone1}>{phone1}</a> : null}
                            {phone2 ? <a href={"tel:+" + phone2}>{phone2}</a> : null}
                        </div>
                    </div>
                   {email ? <div className="flex gap-2">
                        <p><MdOutlineEmail/></p>
                        <a href = {"mailto: " + email}>{email}</a> 
                    </div> : null}
                </div>
            ))
                
            }
        </div>
    )
}