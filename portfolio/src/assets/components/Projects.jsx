import { motion } from "framer-motion";

import { Card } from "./ProjectCard";

const cardInfo = [
    {
        "id": 1,
        "name": "FISHUP",
        "desc": "Proudly presenting my second team project at uni (W.I.P). Being IoT oriented, it's a fishtank control system using an ESP32, a mobile app made with React Native to control the lights and food dispenser, and a Web page that includes a dashboard with graphs relaying the data captured by the pH and temperature sensors.",
        "path": "https://github.com/Nyanduck72/FISHUP-Web"
    },
    {
        "id": 2,
        "name": "GameVault",
        "desc": "This was one of the first team proyects i've participated on. It's a sort-of social media where users leave reviews on their favorite games, and if they don't find it, they can add it! The website runned on hopes and dreams, meaning MySQL for the database, PHP back-end and Bootstrap front-end, hosted on a free trial that (expectedly) ran out. Safe to say that i've found better ways to deploy websites :P",
        "path": "https://github.com/GaelCrack15/gamevault"
    },
    {
        "id": 3,
        "name": "NexxusFandom",
        "desc": "I had a small part in the making of this project (some front-end stuff in the 'Marvel' section). This project was my first exposure to React, Typescript and Tailwind CSS and, since then, It has been my favorite way to do web stuff.",
        "path": "https://github.com/Ricwolf19/WEB-Nexus-Fandom"
    },
    {
        "id": 4,
        "name": "xd",
        "desc": "A simple webpage made as a meme. With this project I learned the use of z-indexes and sound implementation in web pages, even if it's in... this way.",
        "path": "https://github.com/Nyanduck72/xd"
    },
    {
        "id": 5,
        "name": "TO-DO App",
        "desc": "This was one of the first projects I've developed with React on my own. It uses Firebase to store the tasks and it taught me valuable lessons about state management and the use of hooks. Sadly, i couldn't get it deployed, but you can check the code on my GitHub!",
        "path": "https://github.com/Nyanduck72/TODO"
    },
    {
        "id": 6,
        "name": "Pong",
        "desc": "This is one that im really proud of! It's a simple recreation of the famous PONG game from the Atari era. It uses the HTML5 canvas and vanilla JS to make the game work. It's not perfect, but it's a start, considering I figured out the logic by myself!",
        "path": "https://github.com/Nyanduck72/Pong"
    },
    {
        "id": 7,
        "name": "Calculator",
        "desc": "I made this calculator during a course when i was first learning JS. It's a simple calculator that can do the basic operations, and it was my first exposure to the DOM and event listeners. It ain't much, but it's honest work.",
        "path": "https://github.com/Nyanduck72/Calculadora"
    },
    {
        "id": 8,
        "name": "Album displayer",
        "desc": "I don't just consume APIs, I also make them! This app makes use of Express.js to create and serve an API about The Strokes' discography, with a way to add more albums!",
        "path": "https://github.com/Nyanduck72/Practica-Cors"
    }
];

export function Projects() {
    return (
        <>
            <motion.div className="w-full h-full p-8 bg-neutral-800"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%" , transition: {duration: 0.25}}}                  
            >
                <div>
                    <h1 className="text-center text-4xl text-neutral-400 mb-4 lg:text-7xl lg:text-left sm:text-6xl sm:text-left">My<span className="font-bold text-5xl text-green-500 lg:text-8xl sm:text-7xl"> Projects</span></h1>
                    <p className=" text-center text-2xl text-neutral-50 lg:text-3xl lg:text-left sm:text-2xl sm:text-left">The highlights of my journey</p>
                    <div className="border-t-2 border-green-500 my-8"></div>
                    <div className="w-full h-full mx-auto p-8 grid gap-x-2 gap-y-8 lg:grid-cols-2 md:grid-cols-1">
                        {cardInfo.map((project) => (
                            <Card key={project.id} project={project} />
                        ))}                        
                    </div>
                </div>
            </motion.div>
        </>
    )
}