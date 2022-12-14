import Header from "../../components/Header"
import { Outlet } from 'react-router-dom'
import Footer from "../../components/Footer"

function Pages () {

  return (
    <>
      <Header />
      <div className="placeholder-header"></div>
      <div className="container">
        <Outlet />
        <Footer />
      </div>
      
    </>
  )
}

export default Pages
