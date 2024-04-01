import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion";

import { FileDown, Github, Linkedin } from 'lucide-react';

export function Home() {
    const [typeEffect] = useTypewriter({
        words: ['Software Developer', 'Videogame Developer', 'Web Developer', 'Musician', 'Learner'],
        loop: {}
    })

    let screen_size = window.innerWidth;

    return (
        <>
        <motion.div className="w-full h-full p-8 grid bg-neutral-800 gap-x-2 gap-y-8 lg:grid-cols-2 md:grid-cols-1"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%" , transition: {duration: 0.25}}}        
        >
            <div>
                <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-7xl lg:text-left sm:text-6xl sm:text-left">Hi!, I'm <span className="font-bold text-5xl text-green-500 lg:text-8xl sm:text-7xl">Alex</span></h1>
                <p className= {`${screen_size < 430 ? "text-[18px]" : "lg:text-3xl lg:text-left sm:text-2xl sm:text-left"} text-center text-2xl text-neutral-50`}>And I'm a <span>{typeEffect}</span><span className='text-green-500'><Cursor /></span></p>
                <div className="border-t-2 border-green-500 my-4">
                </div>
                <p className="text-justified text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl sm:text-left">I'm a software developer with a passion for creating and learning new things. I'm currently learning C++ and C# to create videogames on Unity and Unreal, and always looking for a challenge.</p>
                <div className='w-full grid gap-x-4 gap-y-4 lg:grid-cols-1 md:grid-cols-1'>
                <a className='mt-4 p-2 border-none rounded-lg font-bold flex flex-col items-center content-center bg-neutral-200 w-full hover:bg-neutral-50' href="/CV.pdf" target='_blank'><FileDown /> Download my CV</a>
                    <div className='w-full grid gap-x-4 gap-y-4 lg:grid-cols-2 md:grid-cols-1'>
                    <a className='mt-4 p-2 border-none rounded-lg text-white font-bold flex flex-col items-center content-center bg-neutral-950 w-full hover:bg-neutral-900' href="https://github.com/Nyanduck72/" target='_blank'><Github stroke='#fff'/> Check me out on GitHub...</a>
                    <a className='mt-4 p-2 border-none rounded-lg text-white font-bold flex flex-col items-center content-center bg-blue-950 w-full hover:bg-blue-900' href="https://github.com/Nyanduck72/" target='_blank'><Linkedin stroke='#fff'/> ...Or LinkedIn.</a>
                    </div>
                </div>
            </div>
            <div className='bg-neutral-600 ml-2'>
            </div>
        </motion.div>
        </>
    )
}