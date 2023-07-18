import Head from "next/head";
import titleImage from "../../public/housing/steel-hut-estate.png"

const HeadComponent = ({
  title=`Cydam Group`, 
  description=`Providing real estate development, construction and engineering, energy and waste management, mining and manufacturing, logistics and export, investment and free trade zone. We are committed to delivering high-quality solutions to our clients by utilizing cutting-edge technology and employing a team of experienced professionals. Our aim is to provide affordable and sustainable solutions that meet the needs of our clients while promoting economic growth and social responsibility.`, 
  keyword=`Real Estate, Construction, Building, Waste Management, Rent, Sales, Renewable Energy, Housing, Estate Developement, Property search, Energy, Mining, Manufacturing`}) => {
  return (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keyword" content={keyword}/>
        <meta name="author" content="Cydam Global"/>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={'https://www.cydamgroup.org/_next/image?url=%2Fhousing%2Fsteel-hut1.png&w=640&q=75'} />
        {/* <Script src="https://js.paystack.co/v1/inline.js"/> */}
      </Head>
  )
}

export default HeadComponent
