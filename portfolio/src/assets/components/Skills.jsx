import { motion } from "framer-motion"

import { ProgressBar } from "./Bar"

const code_skills = [
    { name: 'Java', progress: 50, info: ["Object Oriented Programming"]},
    { name: 'C#', progress: 50, info: []},
    { name: 'Javascript', progress: 55, info: []},
    { name: 'React.js', progress: 33, info: []},
    { name: 'Next.js', progress: 5, info: []},
    { name: 'HTML', progress: 85, info: []},
    { name: 'PHP', progress: 25, info: []},
    { name: 'C++', progress: 15, info: []},
    { name: 'Arduino / IoT', progress: 38, info: []},
    { name: 'Python', progress: 33, info: []},
]

const other_skills = [
    { name: 'Digital art', progress: 20, info: []},
    { name: 'Git / GitHub', progress: 40, info: []},
    { name: 'Bash commands', progress: 35, info: []},
    { name: 'Database management', progress: 30, info: []},
    { name: 'Network management', progress: 30, info: []},
    { name: 'Fucking around', progress: 300, info: []},
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
            <h2 className="text-center text-2xl text-neutral-400 mb-2 lg:text-5xl lg:text-left sm:text-4xl sm:text-left">Coding <span className="font-bold text-3xl text-green-500 lg:text-5xl sm:text-5xl">Languages</span></h2>
            <div className="w-full h-full mx-auto p-8 grid gap-x-6 gap-y-4 lg:grid-cols-2 md:grid-cols-1">
                {code_skills.map((skill) => (
                    <ProgressBar key={skill.name} skill={skill} />
                ))}
            </div>
            <div className="border-t-2 border-green-500 my-8"></div>
            <h2 className="text-center text-2xl text-neutral-400 mb-2 lg:text-5xl lg:text-left sm:text-4xl sm:text-left">Other <span className="font-bold text-3xl text-green-500 lg:text-5xl sm:text-5xl">Stuff</span> :P</h2>
            <div className="w-full h-full mx-auto p-8 grid gap-x-6 gap-y-4 lg:grid-cols-2 md:grid-cols-1">
                {other_skills.map((skill) => (
                    <ProgressBar key={skill.name} skill={skill} />
                ))}
            </div>
        </motion.div>
        </>
    )
}