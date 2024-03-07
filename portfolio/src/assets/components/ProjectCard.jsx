import React from 'react';

import { ArrowRight } from 'lucide-react'

export function Card({ project }) {
  return (
    <>
        <div className="max-w-sm grid grid-cols-1 content-between bg-neutral-900 rounded shadow-sm shadow-green-500">
        <div className="px-6 py-4">
            <div className="font-bold text-xl text-green-500 mb-2">{project.name}</div>
            <p className="text-neutral-50 text-base">
                {project.desc}
            </p>
        </div>
        <div className="px-6 py-4">
        { project.path ? (<a className='' href={project.path || ''} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center py-4 gap-x-2">
                <ArrowRight stroke='#0f0'/>
                    <p className='text-neutral-50'>View the repo</p>
                </div>
            </a>) : (<p className='text-neutral-50 py-4 gap-x-2'>This repo is not available</p>)}
        </div>
        </div>
    </>
  );
};