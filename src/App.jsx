import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index : true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'contact', element: <Contact /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
