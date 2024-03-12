import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProjectsPage } from '../pages/ProjectsPage';

import { AnimatePresence } from 'framer-motion';
import { NotFound } from '../pages/NotFound';
import { SkillsPage } from '../pages/SkillsPage';

export function AnimatedRoutes() {
    const location = useLocation();
    return (
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}