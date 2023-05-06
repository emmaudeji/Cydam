import Header from "../Navigation/Header"
import Footer from "../Navigation/Footer"

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout