import React from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Offer from './pages/Offer'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Appointement from './components/Appointement'
import Service from './pages/Service'
const App = () => {
  const Layout = () => (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Homepage />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/service',
          element: <Service />
        },
        {
          path: '/offer',
          element: <Offer />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/Pricing',
          element: <Pricing />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/appointement',
          element: <Appointement />
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App