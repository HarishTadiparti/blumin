import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Academia from './pages/Academia'
import Industry from './pages/Industry'
import ContactUs from './pages/ContactUs'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24 p-5 min-h-full bg-[#e6f3fb]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
