import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion";

export function Home() {
    const [typeEffect] = useTypewriter({
        words: ['Software Developer', 'Videogame Developer', 'Web Developer', 'Musician', 'Learner'],
        loop: {}
    })
    return (
        <>
        <motion.div className="w-full h-full p-8 grid bg-neutral-800 gap-x-2 gap-y-8 lg:grid-cols-2 md:grid-cols-1"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%" , transition: {duration: 0.25}}}        
        >
            <div>
                <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-7xl lg:text-left sm:text-6xl sm:text-left">Hi!, I'm <span className="font-bold text-5xl text-lime-500 lg:text-8xl sm:text-7xl">Alex</span></h1>
                <p className=" text-center text-2xl text-neutral-50 lg:text-3xl lg:text-left sm:text-2xl sm:text-left">And I'm a <span>{typeEffect}</span><span className='text-lime-500'><Cursor /></span></p>
                <div className="border-t-2 border-lime-500 my-4">
                </div>
                <p className="text-center text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl sm:text-left">I'm a software developer with a passion for creating and learning new things. I'm currently learning C++ and C# to create videogames on Unity and Unreal, and always looking for a challenge.</p>
            </div>
            <div className='bg-neutral-600 ml-2'>
            </div>
        </motion.div>
        </>
    )
}