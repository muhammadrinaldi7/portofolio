import { NavLink } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <footer >
        <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600">
            <img src={logo} className="h-8" alt="" />
            </div>
            <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12">
            <li>
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => 
                                        isActive ? "text-[#0dce6f]" : "hover:text-[#0dce6f]"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className={({ isActive }) => 
                                        isActive ? "text-[#0dce6f]" : "hover:text-[#0dce6f]"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/works" 
                                    className={({ isActive }) => 
                                        isActive ? "text-[#0dce6f]" : "hover:text-[#0dce6f]"
                                    }
                                >
                                    Works
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className={({ isActive }) => 
                                        isActive ? "text-[#0dce6f]" : "hover:text-[#0dce6f]"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
            </ul>
            <ul className="flex justify-center gap-6 mt-12 md:gap-8">
                <li>
                    <a
                    href="https://wa.me/+6289523196044"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">Whatsapp</span>
                    <FontAwesomeIcon className="size-6" icon={faWhatsapp}/>
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.instagram.com/_mrinaldi"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">Instagram</span>
                    <FontAwesomeIcon className="size-6" icon={faInstagram}/>
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.linkedin.com/in/muhammadrinaldi7"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon className="size-6" icon={faLinkedin}/>
                    </a>
                </li>

                <li>
                    <a
                    href="https://github.com/muhammadrinaldi7"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">GitHub</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

            </ul>
        </div>
        </footer>
    )
}

export default Footer