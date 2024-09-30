export const CardProject = (props) => {

    const { image, title, project } = props
    return (
        <div className="flex flex-col p-3 bg-white rounded-lg shadow-md hover:scale-105 lg:hover:rotate-2 hover:shadow-2xl">
            <div className="w-full h-64 mb-4 bg-gray-100 rounded-lg">
                <img src={image} className="object-cover w-full h-full rounded-lg" alt="" />
            </div>
            <p className="font-sans text-sm font-bold text-gray-400">{title}</p>
            <h1 className="text-xl font-medium">{project}</h1>
        </div>
    )
}