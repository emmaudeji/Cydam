import Header from "../Navigation/Header"
import Footer from "../Navigation/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout