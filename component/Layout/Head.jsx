import Head from "next/head";

const HeadComponent = ({
  title=`Cydam Global`, 
  description=`Real Estate and Construction`, 
  keyword=`Real Estate, Construction, Building, Rent, Sales, Housing, Estate Developement, Property search, Energy`}) => {
  return (
    <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keyword" content={keyword}/>
        <meta name="author" content="Cydam Global"/>
        <meta name="description" content={description} />
        {/* <Script src="https://js.paystack.co/v1/inline.js"/> */}
      </Head>
  )
}

export default HeadComponent