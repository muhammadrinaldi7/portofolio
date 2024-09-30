import profile from "../../assets/img/profile.png"
import logo from "../../assets/img/logo.png"
import fav from "../../assets/img/fav.png"
import project from "../../assets/img/project.jpg"
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";

import { faBriefcase, faCode, faHome, faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <>
        <header>
            <div className="container mx-auto">
                {/* Large */}
                <div className="flex-row items-center justify-between hidden px-12 py-8 md:flex" >
                    <a href="./index.html" className="logo">
                        <img src={logo} className="w-32" alt="" />
                    </a>
                    <nav className="">
                        <ul className="flex flex-row gap-10 text-[#6c757d]">
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
                    </nav>
                    <NavLink to="/contact" className="px-6 py-2 text-white hover:bg-[#0dce6f] bg-black rounded-lg">Let's talk</NavLink>
                </div>
                {/* Small */}
                <div className="fixed z-50 flex flex-col justify-center w-16 h-screen gap-3 bg-transparent right-2 lg:hidden">         
                <div className="">
                    <div className="border-gray-100 rounded-md bg-[#dddddd]/70">
                        <div className="py-8">
                            <ul className="flex flex-col gap-5 space-y-1 border-gray-100 ">
                                <li>
                                <NavLink
                                    to={"/"}
                                    className={({ isActive }) =>
                                        `relative flex justify-center rounded px-2 py-1.5  ${isActive ? 'scale-125' : 'scale-100'}`
                                      }
                                >
                                <img src={fav} className="size-5" alt="" />

                                    <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                    General
                                    </span>
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to={"/"}
                                    className={({ isActive }) =>
                                        `group relative flex justify-center rounded px-2 py-1.5 ${isActive ? ' text-green-500' : 'text-gray-500'} hover:text-green-500`
                                      }
                                    >
                                    <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Home
                                    </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                    to={"/about"}
                                    className={({ isActive }) =>
                                        `group relative flex justify-center rounded px-2 py-1.5 ${isActive ? ' text-green-500' : 'text-gray-500'} hover:text-green-500`
                                      }
                                    >
                                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Billing
                                    </span>
                                    </NavLink>
                                </li>

                                <li>
                                <NavLink
                                    to={"/aboutMe"}
                                    className={({ isActive }) =>
                                        `group relative flex justify-center rounded px-2 py-1.5 ${isActive ? ' text-green-500' : 'text-gray-500'} hover:text-green-500`
                                      }
                                    >
                                    <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Experience & Education
                                    </span>
                                    </NavLink>
                                </li>

                                <li>
                                <NavLink
                                    to={"/project"}
                                    className={({ isActive }) =>
                                        `group relative flex justify-center rounded px-2 py-1.5 ${isActive ? ' text-green-500' : 'text-gray-500'} hover:text-green-500`
                                      }
                                    >
                                        <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Project
                                    </span>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink
                                    to={"/contact"}
                                    className={({ isActive }) =>
                                        `group relative flex justify-center rounded px-2 py-1.5 ${isActive ? ' text-green-500' : 'text-gray-500'} hover:text-green-500`
                                      }
                                    >
                                        <FontAwesomeIcon icon={faAddressCard} className="w-5 h-5" />
                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Contact
                                    </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
                </div>
            </div>
        </header>
    </>
    )
}

export default Header