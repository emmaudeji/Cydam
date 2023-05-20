import Link from "next/link"
const BtnCTAwhite = ({text, link}) => {
  return (
    <Link href={link} className="rounded-full text-white text-lg hover:scale-105 duration-300 border-white border py-4 px-10">
          {text}
    </Link>
  )
}

export default BtnCTAwhite