import Header from "../../component/Header"
import profile from "../../assets/img/profile.png"
import uniska from "../../assets/img/uniska.png"
import kkj from "../../assets/img/kkj.png"
import nmv from "../../assets/img/nmv.png"
import dibmibing from "../../assets/img/dibimbing.webp"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "../../component/Footer"
const Summary = () => {
    useEffect(() => {
        Aos.init({
            easing: "ease-out",
            duration: 1500, // Durasi animasi (milidetik)
            once: true, // Animasi hanya muncul sekali
        });
    }, []);
    return (
        <>
        <Header />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col w-full gap-4 mb-10 text-center lg:flex-row" data-aos="fade-up">
                    <div className="">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="p-8 bg-white rounded-lg">
                            <img
                                alt="team"
                                className="flex-shrink-0 object-contain rounded-lg bg-gradient-to-br from-green-200 via-green-400 to-green-600 drop-shadow-lg w-80 h-60"
                                src={profile}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="w-full" data-aos="fade-up">
                        <div className="flex flex-col w-full h-full">
                            <h1 className="mb-4 font-serif text-3xl font-bold text-black">SELF SUMMARY</h1>
                            <div className="flex-grow w-full px-8 pt-20 pb-8 text-left bg-white rounded-lg">
                                <h2 className="text-4xl font-medium text-gray-900 title-font">Muhammad Rinaldi</h2>
                                <p className="mt-2 text-justify text-gray-600">Saya adalah seorang Full-Stack Web Developer berbasis di Indonesia dengan fokus pada pengembangan aplikasi web. Saya memiliki pengalaman yang beragam dalam bekerja di berbagai industri, terutama dalam bidang teknologi informasi. Menguasai berbagai framework seperti CodeIgniter, Laravel, React.js, TailwindCSS, dan Bootstrap, saya telah beberapa kali mengerjakan proyek yang menggabungkan React.js sebagai frontend dan Laravel sebagai backend RESTful API.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-8 mb-20 lg:flex-row" >
                    <div className="flex flex-col w-full gap-2 p-6 bg-white rounded-lg lg:w-1/2" data-aos="zoom-in">
                        <h1 className="mb-6 text-xl uppercase">Experience</h1>
                        <div className="flex flex-col gap-2 mb-4">
                            <p className="text-sm font-bold text-gray-500">Januari - Agustus 2023</p>
                            <p className="text-lg text-green-500">IT Support/Porgrammer || SAP HANASQL, SAP Bussiness One</p>
                            <div className="flex flex-row items-center gap-3">
                            <span><img src={kkj} className="w-10 h-10" alt="" /></span>
                            <p className="text-sm font-medium text-gray-500">PT. Kapuas Kencana Jaya</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <p className="text-sm font-bold text-gray-500">Oktober 2023 - Sekarang</p>
                            <p className="text-lg text-green-500">IT Support/Porgrammer || Web Development, CodeIgniter 4</p>
                            <div className="flex flex-row items-center gap-3">
                            <span><img src={nmv} className="w-12 h-10 lg:w-full" alt="" /></span>
                            <p className="text-sm font-medium text-gray-500">PT. Nansarunai Mega Vision</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 p-6 bg-white rounded-lg lg:w-1/2" data-aos="zoom-in">
                        <h1 className="mb-6 text-xl uppercase">Education</h1>
                        <div className="flex flex-col gap-2 mb-4">
                            <p className="text-sm font-bold text-gray-500">2018 - 2022</p>
                            <p className="text-lg text-green-500">S1 Teknik Informatika</p>
                            <div className="flex flex-row items-center gap-3">
                            <div className="w-1/6 lg:w-10">
                            <img src={uniska} className="w-10 h-10 lg:w-full" alt="" />
                            </div>
                            <p className="text-sm font-medium text-gray-500">
                                Universitas Islam Kalimantan Muhammad Arsyad Al Banjari
                            </p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <p className="text-sm font-bold text-gray-500">Juni 2024 - Sekarang</p>
                            <p className="text-lg text-green-500">Bootcamp Frontend Developer || React.js</p>
                            <div className="flex flex-row items-center gap-3">
                            <div className="w-36">
                                <img src={dibmibing} className="h-10 w-36" alt="" />
                            </div>
                            <p className="text-sm font-medium text-gray-500">Dibimbing.id</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Summary