import { Children } from "react"

export const CardExpEdu = (props) => {
    const { period,company, position, children } = props
    return (
        <>
            <div className="flex flex-col gap-2 overflow-auto">
                <p className="text-sm text-gray-500">{period}</p>
                <h1 className="font-sans text-xl font-semibold text-green-500" >{position}</h1>
                <p className="text-sm text-gray-500">{company}</p>
                <p className="text-sm text-justify text-gray-500">
                    {children}
                </p>
            </div>
        </>
    )
}