import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { AnimatedRoutes } from './assets/components/AnimatedRoutes';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nav, setNav] = useState(false);

    const menuItems = [
        {
            name: 'Home',
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
              <nav className="bg-neutral-950 w-32 flex-shrink-0 h-screen fixed">
                  <ul className="flex flex-col p-4">
                      {menuItems.map((item, index) => (
                          <li key={index} className="mb-2">
                              <Link to={item.path} className="text-gray-300 hover:text-lime-500 hover:underline">
                              <span>{item.name}</span>
                              </Link>
                          </li>
                      ))}
                  </ul>
              </nav>
              <div className="flex-1 ml-32 h-screen">
                <AnimatedRoutes />
              </div>
          </div>
      </Router>
  );
}

export default App
