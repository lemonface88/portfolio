import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import About from './components/About'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Buggy from './components/Buggy'

const router = createBrowserRouter (
  [
    {
      element: <Navbar/>,
      children: [
        {
          path: "/",
          element: <App />
        },
        {
          path:"/About",
          element: <About/>
        },
        {
          path:"/Resume",
          element:<Resume/>
        },
        {
          path:"/Projects",
          element:<Projects/>
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
