import { motion } from "framer-motion"

import { ProgressBar } from "./Bar"

const code_skills = [
    { name: 'Java', progress: 35, info: ["Conditions & Loops", "Exception H&ling", "Functions", "Classes & Methods"]},
    { name: 'C#', progress: 25, info: ["Conditions & Loops", "Functions", "Classes & Methods"]},
    { name: 'Javascript', progress: 60, info: ["DOM manipulation", "Promises & Asynchronous Functions", "Local Storage", "Stacks & Queues", "Classes & Methods", "Basic Node.js & Express.js"]},
    { name: 'React.js', progress: 33, info: ["JSX", "Components & Properties", "Basic Hooks (useState & useEffect)"]},
    { name: 'HTML', progress: 85, info: ["Responsive Pages", "Embedded Elements", "Forms", "Canvas", "Atributes & Events"]},
    { name: 'CSS', progress: 70, info: ["Gradients", "Element Alignment & Z-indexes", "Animations & Transitions", "Custom Fonts", "Bootstrap / Tailwind CSS Frameworks"]},
    { name: 'PHP', progress: 15, info: ["HTTP Requests", "Database Connections"]},
    { name: 'C++', progress: 15, info: ["Conditions & Loops", "Vectors & Arrays"]},
    { name: 'Arduino / IoT', progress: 38, info: ["Breadboard & Welded Circuits", "Embedded Systems", "Bluetooth Communication", "NoSQL Connections with Firebase"]},
    { name: 'Python', progress: 25, info: ["Conditions & Loops", "Functions"]},

]

const other_skills = [
    { name: 'Digital art', progress: 20, info: ["Photoshop", "CorelDRAW"]},
    { name: 'Git / GitHub', progress: 35, info: ["Basic functions (Fetch, Pull, Push & Commit) on terminal", "Branch Administration"]},
    { name: 'Bash commands', progress: 35, info: ["Basic commands (ls, cd, mv, rm, touch, mkdir, etc.)", "Pipes and Redirections", "User Management", "Shell Scripting"]},
    { name: 'Database management', progress: 30, info: ["SQL Relational Tables, Queries & Views", "SQL Permissions", "SQL Procedures & Transactions", "Firebase Realtime Databases, Firestore and Authentication Services"]},
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
            <div className="w-full h-full mx-auto p-8 grid gap-x-6 gap-y-6 lg:grid-cols-2 md:grid-cols-1">
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