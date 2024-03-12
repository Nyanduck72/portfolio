import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { AnimatedRoutes } from './assets/components/AnimatedRoutes';

import { ArrowRightFromLine, ArrowLeftFromLine, Home, User, Briefcase, Star, Mail } from 'lucide-react';

import './App.css'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home />
    },
    {
      name: 'About',
      path: '/about',
      icon: <User />
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <Briefcase />
    },
    {
      name: 'Skills',
      path: '/skills',
      icon: <Star />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail />
    }
  ];

  return (
    <Router>
      <div className="flex">
        <nav
          className={`bg-neutral-950 w-32 flex-shrink-0 h-screen fixed transition-max-width duration-200 ${
            isNavOpen ? 'max-w-32' : 'max-w-0'
          }`}
        >
          <button
            className={`mx-11 my-4 text-center text-neutral-50 px-2 py-1 rounded-md transition-all duration-300 ${ isNavOpen ? 'max-w-32' : 'hidden'}`}
            onClick={toggleNav}
          >
            <ArrowLeftFromLine />
          </button>

          <ul className={`flex flex-col p-4 transition-all duration-300 ${isNavOpen ? ('') : ('hidden')} `}>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-8">
                <Link
                  to={item.path}
                  className="flex items-center text-neutral-300 gap-x-2 hover:text-green-500"
                >
                  <div>{item.icon}</div>
                  <span className="border-l-2 border-neutral-50 pl-2 border-transparent hover:border-green-200 hover:py-1 transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`flex-1 h-screen ${isNavOpen ? 'ml-32 ' : ''} `}>
          <AnimatedRoutes />
        </div>
        {!isNavOpen && (
          <button
            className="fixed top-2 left-0 bg-neutral-950 text-neutral-50 px-2 py-3 shadow-lg rounded-r-md transition-all duration-300"
            onClick={toggleNav}
          >
            <ArrowRightFromLine />
          </button>
        )}
      </div>
    </Router>
  );
}
export default App
