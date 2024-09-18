import profile from "../../assets/img/profile.png"
import logo from "../../assets/img/logo.png"
import fav from "../../assets/img/fav.png"
import project from "../../assets/img/project.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
    return (
        <>
        <header>
            <div className="container mx-auto">
                {/* Large */}
                <div className="flex-row items-center justify-between hidden py-8 md:flex" data-aos="zoom-in">
                    <a href="./index.html" className="logo">
                        <img src={logo} className="w-32" alt="" />
                    </a>
                    <nav className="">
                        <ul className="flex flex-row gap-10 text-[#6c757d]">
                            <li className="hover:text-[#0dce6f]"><a href="index.html">Home</a></li>
                            <li className="hover:text-[#0dce6f]"><a href="about.html">About</a></li>
                            <li className="hover:text-[#0dce6f]"><a href="works.html">Works</a></li>
                            <li className="hover:text-[#0dce6f]"><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="./contact.html" className="px-6 py-2 text-white hover:bg-[#0dce6f] bg-black rounded-lg">Let's talk</a>
                </div>
                {/* Small */}
                <div className="fixed z-50 flex flex-col justify-center w-16 h-screen gap-3 bg-transparent right-5 lg:hidden">         
                <div className="">
                    <div className="border-gray-100 rounded-md bg-[#dddddd]/70">
                        <div className="py-8">
                            <ul className="flex flex-col gap-5 space-y-1 border-gray-100 ">
                            <li>
                            <a
                                href="#"
                                className="t group relative flex justify-center rounded px-2 py-1.5 "
                            >
                            <img src={fav} className="size-5" alt="" />

                                <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                General
                                </span>
                            </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-75 size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>

                                <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                    Teams
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-75 size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>

                                <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                    Billing
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-75 size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>

                                <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                    Invoices
                                </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="opacity-75 size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>

                                <span
                                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                    Account
                                </span>
                                </a>
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