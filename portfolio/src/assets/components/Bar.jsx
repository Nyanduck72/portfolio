import React, {useState} from "react"

import {LucideArrowDownCircle, LucideArrowUpCircle} from "lucide-react"

export function ProgressBar({skill}) {
    const [active, setActive] = useState(false);

    const toggleInfo = () => {
        setActive(!active);
    }
    return (
        <>
        <div>
        <h1 className="font-bold text-xl text-neutral-400 mr-3">{skill.name}</h1>
        <div className="flex items-center py-4 gap-x-2">
            <div className="w-1/8 h-8" onClick={toggleInfo}>
                {active ? (<LucideArrowUpCircle stroke="#d6d6d6" width={32} height={32} className="hover:cursor-pointer"/>) : (<LucideArrowDownCircle stroke="#d6d6d6" width={32} height={32} className="hover:cursor-pointer"/>)}
            </div>
            <div className="w-full h-8 bg-neutral-700 rounded-lg">
                <div className="h-full rounded-lg bg-green-500 flex items-center relative hover:bg-green-400" style={{ width: `${skill.progress}%` }}></div>
            </div>
        </div>
        <div className={`w-full ${active ? ("") : ("hidden")} `}>
            <ul>
            {skill.info.map((data, i) => {
                <li key={i}>{data}</li>
            })}
            </ul>
        </div>
        </div>
        </>
    )
}