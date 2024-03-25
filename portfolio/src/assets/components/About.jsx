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
                            <p className="text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl">
                                I'm 19 years old and on my second year at UTCH studying cross-platform software development, with a heavy focus on web applications. I'm currently picking up videogame development again, this time in Godot!<br /><br />
                                I wanted this section to function more or less like a diary or blog, so I will be updating this every once in a while with whatever i got going on :)
                                </p>
                        </div>
                        <div className="bg-neutral-600 p-4">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="border-t-2 border-green-500 my-8"></div>
                    <div className="w-full h-full p-8 grid gap-x-4 gap-y-8 lg:grid-cols-2 md:grid-cols-1">
                        <div className="bg-neutral-500"></div>
                        <div>
                            <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-5xl lg:text-left sm:text-4xl sm:text-left">My <span className="font-bold text-5xl text-green-500 lg:text-7xl sm:text-5xl">Hobbies</span></h1>
                            <p className="text-xl text-neutral-50 mb-2 lg:text-xl lg:text-left sm:text-xl">Before I got into programming, I spent my afternoons (and sometimes late nights) playing the <strong>guitar</strong> and playing <strong>videogames</strong> with my friends.</p>
                            <p className="text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl">
                                I was a very active kid, so like any parent with a kid like that, my 
                                mother signed me up to random crap just so i wouldn't bother her 
                                at the house... and it worked! I loved every second of learning new 
                                songs and it introduced me to a lot of people, and contrary to my other interests, 
                                I didn't drop it after the first month like skateboarding or parkour. <br />
                                Since getting into playing the guitar, my music taste shifted to 2000's indie and punk rock, with some outliars like 80's and 90's metal, 
                                maybe because they're the most fun to play IMO :P
                            </p>
                        </div>
                    </div>
                    <div className="border-t-2 border-green-500 my-8"></div>
                    <div className="w-full h-full p-8 grid gap-x-4 gap-y-8 lg:grid-cols-1 md:grid-cols-1">
                        <div>
                            <h1 className="text-center text-4xl text-neutral-400 mb-6 lg:text-5xl lg:text-left sm:text-4xl sm:text-left">My <span className="font-bold text-5xl text-green-500 lg:text-7xl sm:text-5xl">Start</span> in programming</h1>
                            <p className="text-xl text-neutral-50 mb-2 lg:text-xl lg:text-left sm:text-xl">
                                My first introduction to any form of software development was in middle school. We skimmed through a short lesson in HTML web 
                                pages using DreamWeaver and just moved on to some <strong>CorelDRAW</strong> (very dated, i know...), but this sparked a small curiosity in 14 y/o 
                                me. A few months went by and it was now summer break. I signed up for a Unity game dev course at a local museum and got a small taste of the <strong>satisfaction</strong> that 
                                making sense of code and the logic behind it all. Once the course was over, I really got into watching devlogs of big games; some of the most memorable ones were the 
                                Sony's "<a href="https://youtu.be/lJZWKBDXXFY?si=pVAjUmXPWgA1ZbXP" className="text-green-500" target="_blank" rel="noopener noreferrer">Raising Kratos</a>", 
                                "<a href="https://youtu.be/6rTn8sj24wA?si=GBofXeY2S7OFjeQ_" className="text-green-500" target="_blank" rel="noopener noreferrer">Making of - Uncharted 4: A Thief's End</a>" and 
                                "<a href="https://youtu.be/7ITtPPE-pXE?si=eCRif9ubxfw9ldoc" className="text-green-500" target="_blank" rel="noopener noreferrer">The World Design Of Hollow Knight</a>" from Game Maker's Toolkit.
                            </p>
                            <p className="text-xl text-neutral-50 lg:text-xl lg:text-left sm:text-xl">
                                I picked up the web development again in high school for my specialty and got to learn C++ all on my own during the COVID lockdown (Before ChatGPT) for an ATM project. 
                                And that was it! After graduating, I did my entry exam for uni and now I'm here, trying to make a career out of something I'm passionate about. 
                            </p>
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    )
}