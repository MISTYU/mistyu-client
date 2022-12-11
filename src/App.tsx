import Footer from './components/Footer'
import './App.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App () {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
