import { motion } from "framer-motion"

export function About() {
    return (
        <>
            <motion.div className="w-full h-full p-8 bg-neutral-800"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%" , transition: {duration: 0.25}}}                  
            >
                <div>
                    <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-7xl lg:text-left sm:text-6xl sm:text-left"><span className="font-bold text-5xl text-green-500 lg:text-8xl sm:text-7xl">About</span> Me</h1>
                    <p className=" text-center text-2xl text-neutral-50 lg:text-3xl lg:text-left sm:text-2xl sm:text-left">F.Y.I</p>
                    <div className="border-t-2 border-green-500 my-8">
                    </div>
                    <div className="w-full h-full p-8 grid gap-x-4 gap-y-8 lg:grid-cols-2 md:grid-cols-1">
                        <div>
                            <p className="text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl sm:text-left">Hello! My name is Alejandro González, but most people call me <span className="text-green-500">Alex</span>.</p>
                            <br />
                            <p className="text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl">I'm currently 19 years old and on my second year at UTCH studying cross-platform software development, with a heavy focus on web applications. </p>
                        </div>
                        <div className="bg-neutral-600 p-4">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="border-t-2 border-green-500 my-8"></div>
                    <div className="w-full h-full p-8 grid gap-x-2 gap-y-8 lg:grid-cols-2 md:grid-cols-1">
                        <div>

                        </div>
                    </div>
                    <div className="border-t-2 border-green-500 my-8"></div>
                </div>
            </motion.div>
        </>
    )
}