import { motion } from "framer-motion"

import { ProgressBar } from "./Bar"

const code_skills = [
    { name: 'Java', progress: 50},
    { name: 'C#', progress: 50},
    { name: 'Javascript', progress: 55},
    { name: 'React', progress: 33},
    { name: 'Next.js', progress: 5},
    { name: 'HTML', progress: 85},
    { name: 'PHP', progress: 25},
    { name: 'C++', progress: 15},
    { name: 'Arduino / IoT', progress: 38},
    { name: 'Python', progress: 33},
]

const other_skills = [
    { name: 'Digital art', progress: 20},
    { name: 'Git / GitHub', progress: 40},
    { name: 'Bash commands', progress: 35},
    { name: 'Database management', progress: 30},
    { name: 'Network management', progress: 30},
    { name: 'Fucking around', progress: 300},
]

export function Skills() {
    return (
        <>
        <motion.div className="w-full h-full p-8 bg-neutral-800 grid grid-cols-1"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%" , transition: {duration: 0.25}}}>
            <div>
                <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-7xl lg:text-left sm:text-6xl sm:text-left">My <span className="font-bold text-5xl text-green-500 lg:text-8xl sm:text-7xl">Skills</span></h1>
                <p className=" text-center text-2xl text-neutral-50 lg:text-3xl lg:text-left sm:text-2xl sm:text-left">On a scale from "Yeah, I've heard of it" to "Yeah, I've heard of it"</p>
                <div className="border-t-2 border-green-500 my-8"></div>
            </div>
            <h2 className="text-center text-2xl text-neutral-400 mb-2 lg:text-5xl lg:text-left sm:text-5xl sm:text-left">Coding <span className="font-bold text-3xl text-green-500 lg:text-5xl sm:text-4xl">Languages</span></h2>
            <div className="w-full h-full mx-auto p-8 grid gap-x-6 gap-y-4 lg:grid-cols-2 md:grid-cols-1">
                {code_skills.map((skill) => (
                    <ProgressBar key={skill.name} skill={skill} />
                ))}
            </div>
            <div className="border-t-2 border-green-500 my-8"></div>
            <h2 className="text-center text-2xl text-neutral-400 mb-2 lg:text-5xl lg:text-left sm:text-5xl sm:text-left">Other <span className="font-bold text-3xl text-green-500 lg:text-5xl sm:text-4xl">Stuff</span> :P</h2>
            <div className="w-full h-full mx-auto p-8 grid gap-x-6 gap-y-4 lg:grid-cols-2 md:grid-cols-1">
                {other_skills.map((skill) => (
                    <ProgressBar key={skill.name} skill={skill} />
                ))}
            </div>
        </motion.div>
        </>
    )
}