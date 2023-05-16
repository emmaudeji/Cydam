import Head from "next/head";

const HeadComponent = ({
  title=`Cydam Global`, 
  description=`Our company is a dynamic and innovative organization that provides a wide range of services including real estate development, construction and engineering, energy and waste management, mining and manufacturing, logistics and export, investment and free trade zone. We are committed to delivering high-quality solutions to our clients by utilizing cutting-edge technology and employing a team of experienced professionals. Our aim is to provide affordable and sustainable solutions that meet the needs of our clients while promoting economic growth and social responsibility.`, 
  keyword=`Real Estate, Construction, Building, Waste Management, Rent, Sales, Renewable Energy, Housing, Estate Developement, Property search, Energy`}) => {
  return (
    <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keyword" content={keyword}/>
        <meta name="author" content="Cydam Global"/>
        <meta name="description" content={description} />
        {/* <Script src="https://js.paystack.co/v1/inline.js"/> */}
      </Head>
  )
}

export default HeadComponent