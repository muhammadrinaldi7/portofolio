import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import { faChartLine, faCode, faCodeBranch, faCodeCommit, faDatabase, faLaptopCode, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faBootstrap, faCss3, faFreeCodeCamp, faHtml5, faJs, faLaravel, faReact } from "@fortawesome/free-brands-svg-icons"
import sap from "../../assets/img/sap.png"
import sql from "../../assets/img/sql.png"
import { CardSkill } from "../../component/Card/CardSkill"
import Aos from "aos"
import "aos/dist/aos.css"
const Skill = () => {

    return (
        <>
            <Header />
            <section className="container mx-auto">
                <div className="flex flex-col justify-center gap-4 p-6 lg:flex-row">
                    <div className="flex w-full lg:w-[30%] flex-col justify-center bg-white gap-3 p-4 rounded-xl" data-aos="zoom-in">
                        <div className="flex items-center gap-6 px-8 py-6 text-xl font-medium text-center lg:py-10 lg:text-3xl">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-green-500" size="1x"/>
                            Front End
                        </div>
                        <div className="flex items-center gap-6 px-8 py-6 text-xl font-medium text-center lg:py-10 lg:text-3xl">
                        <FontAwesomeIcon icon={faCode} className="text-green-500" size="1x"/>
                            Back End
                        </div>
                        <div className="flex items-center gap-6 px-8 py-6 text-xl font-medium text-center lg:py-10 lg:text-3xl">
                        <FontAwesomeIcon icon={faChartLine} className="text-green-500" size="1x"/>
                            Analytic
                        </div>
                        <div className="flex items-center gap-6 px-8 py-6 text-xl font-medium text-center lg:py-10 lg:text-3xl">
                        <FontAwesomeIcon icon={faLightbulb} className="text-green-500" size="1x"/>
                            Solve Problem
                        </div>
                    </div>
                    <div className="flex w-full lg:w-[70%] flex-col justify-center gap-3 rounded-xl" data-aos="fade-up">
                        <div className="flex h-[5%] items-center justify-center w-full gap-6 px-8 py-10 text-3xl font-medium text-center">
                            <h1 className="text-4xl font-semibold text-green-500 lg:text-6xl">MY SKILLS</h1>
                        </div>
                        <div className="bg-white gap-8 overflow-auto rounded-xl p-6 h-[95%]">
                            <div data-aos="zoom-in" className="grid items-center justify-center w-full grid-cols-2 gap-6 p-6 overflow-auto bg-gray-100 md:grid-cols-4 rounded-xl">
                                <CardSkill skill="CodeIgniter" >
                                    <FontAwesomeIcon icon={faFreeCodeCamp} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="Laravel" >
                                    <FontAwesomeIcon icon={faLaravel} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="React Js" >
                                    <FontAwesomeIcon icon={faReact} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="Tailwind" >
                                <svg stroke="currentColor" className="text-[4em] " fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>
                                </CardSkill>
                                <CardSkill skill="Bootstrap" >
                                    <FontAwesomeIcon icon={faBootstrap} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="HTML" >
                                    <FontAwesomeIcon icon={faHtml5} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="CSS" >
                                    <FontAwesomeIcon icon={faCss3} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="JavaScript" >
                                    <FontAwesomeIcon icon={faJs} size="4x"/>
                                </CardSkill>
                                <CardSkill skill="SQL Language" >
                                    <img src={sql} className="w-[4em]" alt="" />
                                </CardSkill>
                                <CardSkill skill="SAP Bussiness One" >
                                <img src={sap} className="w-[4em]" alt="" />
                                </CardSkill>
                                
                                
                                
                            </div>
                            {/* <div className="p-6 bg-gray-100 rounded-xl">
                                <h1 className="text-lg font-semibold uppercase">Laravel</h1>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-xl">
                                <h1 className="text-lg font-semibold uppercase">Laravel</h1>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-xl">
                                <h1 className="text-lg font-semibold uppercase">Laravel</h1>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-xl">
                                <h1 className="text-lg font-semibold uppercase">Laravel</h1>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Skill