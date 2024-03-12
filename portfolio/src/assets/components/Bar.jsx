

export function ProgressBar({skill}) {
    return (
        <>
        <div>
        <h1 className="font-bold text-xl text-green-500 mr-3">{skill.name}</h1>
        <div className="flex items-center py-4 gap-x-2">
            <div className="w-full h-8 bg-neutral-700 rounded-lg">
                <div className="h-full rounded-lg bg-green-500 flex items-center relative hover:bg-green-400" style={{ width: `${skill.progress}%` }}></div>
            </div>
        </div>
        </div>
        </>
    )
}