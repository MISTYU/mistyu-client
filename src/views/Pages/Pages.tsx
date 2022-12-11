import Header from "../../components/Header"
import { Outlet } from 'react-router-dom'

function Pages () {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Pages
