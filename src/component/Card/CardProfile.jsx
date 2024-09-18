import star from "../../assets/img/star.svg"
import {Link} from "react-router-dom"
export const CardProfile = (props) => {
    const { tittle, link, content, image, subTittle } = props
    return (
        <>
        <Link to={`/${link}`} className="flex flex-col items-center justify-center gap-6 px-6 py-8 bg-white rounded-lg shadow-md hover:text-green-600 lg:flex-row shadow-indigo-100">
            <div className="flex px-10 pt-4 overflow-hidden bg-gray-300 w-60 rounded-br-xl rounded-tl-xl h-25">
                <img
                    alt=""
                    src={image}
                    className="object-cover w-full h-full rounded-md"
                />
            </div>
            <div className="mt-4 overflow-hidden">
                <dl>
                    <div>
                        <dt className="sr-only">Tittle</dt>
                        <dd className="text-sm font-bold text-gray-400 uppercase">{tittle}</dd>
                    </div>

                    <div>
                        <dt className="sr-only">Content</dt>
                        <h1 className="font-sans text-4xl font-semibold" >{content}</h1>
                    </div>
                    <div>
                        <dt className="sr-only">Sub Tittle</dt>
                        <dd className="text-sm text-gray-500">{subTittle}</dd>
                    </div>
                </dl>
            </div>
        </Link>
        </>
    )
}