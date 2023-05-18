import Link from "next/link"

const CTAprojects = () => {
  return (
    
    <section className="section-padding2 py-24 bg-blue-700 w-full text-center">
        <h2 className="text-3xl font-bold pb-8 text-white">
            Trust Us to handle your project with cutting-edge tech innovation
        </h2>
        <Link href={`/quote`} className="rounded-full text-white text-lg hover:scale-105 duration-300 border-white border py-4 px-10">
          Get A Quote
        </Link>
    </section>
  )
}

export default CTAprojects