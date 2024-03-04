import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'

import { HomePage } from './assets/pages/HomePage'
import { AboutPage } from './assets/pages/AboutPage'

import { ArrowLeft, ArrowRight } from 'lucide-react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nav, setNav] = useState(false);

    const menuItems = [
        {
            name: 'Home',
            icon: { ArrowRight},
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Projects',
            path: '/projects'
        }
    ]

    return (
      <Router>
          <div className="flex">
              <nav className="bg-neutral-950 w-32 flex-shrink-0 h-screen">
                  <ul className="flex flex-col p-4">
                      {menuItems.map((item, index) => (
                          <li key={index} className="mb-2 text-center">
                              <Link to={item.path} className="text-gray-300 hover:text-lime-500">
                                  <span></span>{item.name}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </nav>
              <div className="flex-1">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App
