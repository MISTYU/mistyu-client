import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home/Home'
import Articles from '../views/Articles/Articles'
import Life from '../views/Life/Life'
import Me from '../views/Me/Me'
import Pages from '../views/Pages/Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        index: true,
        element: <Articles />
      },
      {
        path: 'life',
        element: <Life />
      },
      {
        path: 'me',
        element: <Me />
      }
    ]
  }
])

export default router