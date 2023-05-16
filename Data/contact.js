import {MdOutlinePhone, MdOutlineLocationOn, MdOutlineEmail} from "react-icons/md"

export const contact = [
    {
        id: 0,
        address: `Florasvej 13, 2nd Floor Left, 2600 Glostrup, Demark`,
        branch: `Head Office`,
        phone1: +4581869997,
        phone2: ``,
        email: `info@cydamglobal.com`
    },
    {
        id: 1,
        address: `16 Nkwere Crescent Area 11 Garki Abuja, Nigeria`,
        branch: `Abuja Office`,
        phone1: +2349096717062,
        phone2: '',
        email: ``
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
                        <p>{email}</p>
                    </div> : null}
                </div>
            ))
                
            }
        </div>
    )
}