import Navigation from "./component/Navigation";
import Resume from "./component/Resume";
import signature from "./assets/img/signature.png"
import profile from "./assets/img/profile.png"
import logo from "./assets/img/logo.png"
import fav from "./assets/img/fav.png"
import project from "./assets/img/project.png"
import AOS from "aos";
import "aos/dist/aos.css"; // Impor CSS AOS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faChevronDown, faFootball, faFutbol, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faFreeCodeCamp, faGithub, faJava, faJs, faLaravel, faLinkedin, faPhp, faReact, faTwitter, faUpwork, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import work from "./assets/img/work.jpg"
import {  CardItem } from "./component/Card/CardItem";
import { CardProfile } from "./component/Card/CardProfile";
import Marquee from "./component/Marque";
import { CardItem2 } from "./component/Card/CardItem2";
import AnimatedComponent from "./component/AnimatedComponent";
import { useEffect } from "react";
import Header from "./component/Header";
import { NavLink } from "react-router-dom";
import Footer from "./component/Footer";

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
        <Header />
        <main>
            {/* Profile */}
            <div className="container px-4 py-2 mx-auto bg-[#f8f9fa]">
                <div className="flex flex-col gap-8 p-2 lg:flex-row " data-aos="fade-up">
                    <CardProfile 
                        content="Muhammad Rinaldi" 
                        subTittle="Full-Stack Web Developer | Driving Results with Laravel, React.js & CodeIgniter" 
                        image={profile} 
                        link="about"
                        tittle="A Web Developer"
                    />
                    <div className="flex flex-col w-full gap-3 lg:w-1/2">
                        <div className="px-6 py-3 bg-white rounded-2xl">
                            <Marquee>
                                Haii saya <span className="text-[#0dce6f]">Muhammad Rinaldi</span>, Saya seorang Full-Stack Web Developer!&nbsp;
                            </Marquee>
                        </div>
                        <div className="flex flex-col justify-between w-full gap-4 item lg:flex-row">
                            <CardItem link="aboutMe" content="About" image={logo} tittle="About me" data-aos="fade-right"/>
                            <CardItem link="project" content="Projects" image={project} tittle="Showcase" data-aos="fade-left"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className="container px-4 py-2 mx-auto overflow-hidden bg-[#f8f9fa]" data-aos="fade-up">
                <div className="grid grid-cols-1 gap-8 p-2 lg:grid-cols-4">
                    <div data-aos="zoom-in">
                        <CardItem2 content="Experience" link="aboutMe" tittle="Work and Education">
                            <div className="flex items-center justify-center w-full h-32 gap-4">
                                <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"/>
                                <FontAwesomeIcon icon={faUserGraduate} className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"/>
                            </div>
                        </CardItem2>
                    </div>
                    <div className="lg:col-span-2" data-aos="fade-up">
                        <CardItem2 content="Skills" link="skill" tittle="Framework & Code Languages">
                        <div className="flex items-center justify-center w-full h-32 gap-4 overflow-auto">
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
                        <CardItem2 content="Profile" link="contact" tittle="Stay with me">
                            <div className="flex items-center justify-center w-full h-32 gap-4 overflow-auto">
                                <FontAwesomeIcon icon={faGithub} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18"/>
                                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18"/>
                                <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18"/>
                            </div>
                        </CardItem2>
                    </div>
                </div>
            </div>
            {/* Project */}
            <div className="container px-4 py-2 mx-auto overflow-hidden bg-[#f8f9fa]" data-aos="fade-up">
                <div className="grid grid-cols-1 gap-8 p-2 lg:grid-cols-4">
                    <div className="lg:col-span-2" data-aos="zoom-in">
                        <CardItem2 clas="disabled readonly cursor-default">
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
                        <CardItem2 link="contact">
                            <div className="flex flex-col justify-center w-full h-32 gap-4 text-3xl text-left">
                                <p>Let's</p>
                                <p >work <span className="text-[#0dce6f]">together.</span></p>
                            </div>
                        </CardItem2>
                    </div>
                    
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default Home;
