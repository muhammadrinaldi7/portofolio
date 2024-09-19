import { Children } from "react"

export const CardSkill = (props) => {
    const { children, skill } = props

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-2 text-gray-400 border-2 bg-white/85 hover:text-green-400 rounded-2xl">
            {children}
            <p>{skill}</p>    
        </div>
    )
}