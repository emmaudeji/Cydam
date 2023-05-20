import Link from "next/link"
const BtnCTAblue = ({text, link}) => {
  return (
    <Link href={link} className="rounded-full text-white text-lg hover:scale-105 duration-300 bg-blue-700 py-4 px-10">
          {text}
    </Link>
  )
}

export default BtnCTAblue