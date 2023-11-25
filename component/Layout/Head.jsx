import Head from "next/head";
import titleImage from "../../public/housing/steel-hut-estate.png"

const HeadComponent = ({
  title=`Cydam Group`, 
  description=`Providing real estate development, construction and engineering, energy and waste management, mining and manufacturing, logistics and export, investment and free trade zone. We are committed to delivering high-quality solutions to our clients by utilizing cutting-edge technology and employing a team of experienced professionals. Our aim is to provide affordable and sustainable solutions that meet the needs of our clients while promoting economic growth and social responsibility.`, ogImg,
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
        <meta property="og:image" content={ogImg } />


        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6532177df2439e1631e65619/1hd5qnhn8';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* <Script src="https://js.paystack.co/v1/inline.js"/> */}

      </Head>
  )
}

export default HeadComponent
// ? ogImg : `https://www.cydamgroup.org/_next/image?url=%2Fhousing%2Fsteel-hut1.png&w=640&q=75`