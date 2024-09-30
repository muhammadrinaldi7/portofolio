import profile from "./assets/img/profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faChevronDown, faFootball, faFutbol, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faFreeCodeCamp, faGithub, faJava, faJs, faLaravel, faLinkedin, faPhp, faReact, faTwitter, faUpwork } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/img/logo.png"
import project from "./assets/img/project.jpg"
import fav from "./assets/img/fav.png"
import work from "./assets/img/work.jpg"
import {  CardItem } from "./component/Card/CardItem";
import { CardProfile } from "./component/Card/CardProfile";
import Marquee from "./component/Marque";
import { CardItem2 } from "./component/Card/CardItem2";
import AnimatedComponent from "./component/AnimatedComponent";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor CSS AOS

const Home = () => {
    useEffect(() => {
        AOS.init({
            easing: "ease-out",
            duration: 1500, // Durasi animasi (milidetik)
            once: true, // Animasi hanya muncul sekali
        });
    }, []);
    
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
                    <div className="bg-white border-gray-100 rounded-md">
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
        <main>
            {/* Profile */}
            <div className="container px-4 py-2  mx-auto bg-[#f8f9fa]">
                <div className="flex flex-col gap-8 p-2 lg:flex-row" data-aos="fade-up">
                    <CardProfile 
                        content="Muhammad Rinaldi" 
                        subTittle="Full-Stack Web Developer | Driving Results with Laravel, React.js & CodeIgniter" 
                        image={profile} 
                        tittle="A Web Developer"
                    />
                    <div className="flex flex-col w-full gap-3 lg:w-1/2">
                        <div className="px-6 py-3 bg-white rounded-2xl">
                            <Marquee>
                                Haii saya <span className="text-[#0dce6f]">Muhammad Rinaldi</span>, Saya seorang Full-Stack Web Developer!&nbsp;
                            </Marquee>
                        </div>
                        <div className="flex flex-col justify-between w-full gap-4 item lg:flex-row">
                            <CardItem content="About" image={logo} tittle="About me" data-aos="fade-right"/>
                            <CardItem content="Projects" image={project} tittle="Showcase" data-aos="fade-left"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className="container px-4 py-2 mx-auto overflow-hidden bg-[#f8f9fa]" data-aos="fade-up">
                <div className="grid grid-cols-1 gap-8 p-2 lg:grid-cols-4">
                    <div data-aos="zoom-in">
                        <CardItem2 content="Experience" tittle="Work and Education">
                            <div className="flex items-center justify-center w-full h-32 gap-4">
                                <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
                                <FontAwesomeIcon icon={faUserGraduate} className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
                            </div>
                        </CardItem2>
                    </div>
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <CardItem2 content="Skills" tittle="Framework & Code Languages">
                        <div className="flex items-center justify-center w-full h-32 gap-4">
                            <FontAwesomeIcon icon={faReact} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                            <FontAwesomeIcon icon={faLaravel} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                            <FontAwesomeIcon icon={faFreeCodeCamp} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                            <FontAwesomeIcon icon={faBootstrap} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                            <FontAwesomeIcon icon={faPhp} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                            <FontAwesomeIcon icon={faJs} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                        </div>

                        </CardItem2>
                    </div>
                    <div data-aos="zoom-in">
                        <CardItem2 content="Profile" tittle="Stay with me">
                            <div className="flex items-center justify-center w-full h-32 gap-4">
                                <FontAwesomeIcon icon={faGithub} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"/>
                                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"/>
                                <FontAwesomeIcon icon={faFutbol} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"/>
                            </div>
                        </CardItem2>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-2 mx-auto overflow-hidden bg-[#f8f9fa]" data-aos="fade-up">
                <div className="grid grid-cols-1 gap-8 p-2 lg:grid-cols-4">
                    <div className="lg:col-span-2" data-aos="zoom-in">
                        <CardItem2>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                            <div className="flex flex-col items-center justify-center h-32 rounded-lg bg-gray-50">
                                <h1 className="text-2xl text-[#0dce6f]">04</h1>
                                <p className="text-sm font-bold text-gray-400">Years</p>
                                <p className="text-sm font-bold text-gray-400">Experience</p>
                            </div>
                            <div className="flex flex-col items-center justify-center h-32 rounded-lg bg-gray-50">
                                <h1 className="text-2xl text-[#0dce6f]">10</h1>
                                <p className="text-sm font-bold text-gray-400">Client</p>
                                <p className="text-sm font-bold text-gray-400">Local</p>
                            </div>
                            <div className="flex flex-col items-center justify-center h-32 rounded-lg bg-gray-50">
                                <h1 className="text-2xl text-[#0dce6f]">+10</h1>
                                <p className="text-sm font-bold text-gray-400">Total</p>
                                <p className="text-sm font-bold text-gray-400">Projects</p>
                            </div>
                          
                        </div>
                        </CardItem2>
                    </div>
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <CardItem2>
                            <div className="flex flex-col justify-center w-full h-32 gap-4 text-3xl text-left">
                                <p>Let's</p>
                                <p >work <span className="text-[#0dce6f]">together.</span></p>
                            </div>
                        </CardItem2>
                    </div>
                    
                </div>
            </div>
           
        </main>
        <footer >
        <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600">
            <img src={logo} className="h-8" alt="" />
            </div>

            {/* <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
            itaque neque.
            </p> */}

            <ul className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:gap-12">
            <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
            </li>

            <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
            </li>

            <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
            </li>

            <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
            </li>

            <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
            </li>

            <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
            </li>
            </ul>

            <ul className="flex justify-center gap-6 mt-12 md:gap-8">
            <li>
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
                >
                <span className="sr-only">Facebook</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>

            <li>
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
                >
                <span className="sr-only">Instagram</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>

            <li>
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
                >
                <span className="sr-only">Twitter</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                </svg>
                </a>
            </li>

            <li>
                <a
                href="#"
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

            <li>
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
                >
                <span className="sr-only">Dribbble</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>
            </ul>
        </div>
        </footer>
        </>
    );
}

export default Home;
