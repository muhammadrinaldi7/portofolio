import star from "../../assets/img/star.svg"

export const CardItem2 = (props) => {
    const { tittle, content, children } = props
    return (
        <>
        <a href="#" className="flex flex-col justify-center w-full p-4 text-left bg-white rounded-lg shadow-md hover:text-green-600 shadow-indigo-100">
            
                {children}

        <div className="mt-2">
            <dl>
                <div>
                    <dt className="sr-only">Tittle</dt>
                    <dd className="text-sm font-bold text-gray-400 uppercase">{tittle}</dd>
                </div>

                <div>
                    <dt className="sr-only">Content</dt>
                    <h1 className="font-sans text-4xl font-semibold lg:text-2xl" >{content}</h1>
                </div>
            </dl>
        </div>
        </a>
        </>
    )
}