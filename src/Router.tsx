import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './pages/_layouts/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
])
