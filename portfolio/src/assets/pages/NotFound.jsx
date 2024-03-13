import { useEffect } from 'react';

import NFI from '/img/s.jpeg'
import VB from '/img/Vine-boom-sound-effect.mp3'

export function NotFound() {
    useEffect(() => {
        const audio = new Audio(VB);
        audio.play();
    });
    return (
        <>
        <div className='w-full h-full pt-8'>
        <div className="flex justify-center">
            <img src={NFI} alt="Not Found"/>
        </div>
        <div className="flex justify-center">
            <div>
                <h1 className="text-center text-4xl text-neutral-400 mb-2 lg:text-7xl lg:text-left sm:text-6xl sm:text-left">This page was <span className="font-bold text-5xl text-green-500 lg:text-8xl sm:text-7xl">not found</span></h1>
                <p className="text-center text-2xl text-neutral-50">I think you got the wrong route there...</p>
            </div>
        </div>
        </div>
        </>
    )
}