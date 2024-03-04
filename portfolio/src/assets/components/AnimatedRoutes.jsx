import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';

import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}