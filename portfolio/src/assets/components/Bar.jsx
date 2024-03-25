import React, { useState } from "react";
import { LucideArrowDownCircle, LucideArrowUpCircle } from "lucide-react";

export function ProgressBar({ skill }) {
  const [active, setActive] = useState(false);

  const toggleInfo = () => {
    setActive(!active);
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-xl text-neutral-400 mr-3">{skill.name}</h1>
        <div className="flex items-center py-4 gap-x-2">
          <div className="w-1/8 h-8" onClick={toggleInfo}>
            {active ? (
              <LucideArrowUpCircle
                stroke="#b6b6b6"
                width={32}
                height={32}
                className="hover:cursor-pointer"
              />
            ) : (
              <LucideArrowDownCircle
                stroke="#b6b6b6"
                width={32}
                height={32}
                className="hover:cursor-pointer"
              />
            )}
          </div>
          <div className="w-full h-8 bg-neutral-700 rounded-lg">
            <div
              className="h-full rounded-lg bg-green-500 flex items-center relative hover:bg-green-400"
              style={{ width: `${skill.progress}%` }}
            ></div>
          </div>
        </div>
        <div className={`w-full ml-3.5 ${active ? "border-l-4 border-green-300 block" : "hidden"}`}>
          <ul className="ml-12">
            {skill.info.map((data, index) => (
              <li key={index} className="text-neutral-50 list-disc">{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
