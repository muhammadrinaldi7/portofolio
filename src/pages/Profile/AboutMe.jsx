import Header from "../../component/Header"
import Footer from "../../component/Footer"
import profile from "../../assets/img/profile1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { CardExpEdu } from "../../component/Card/CardExpEdu"
import Aos from "aos"
import "aos/dist/aos.css"
const AboutMe = () => {
    return (
        <>
            <Header />
            <section className="container mx-auto scroll-smooth" >
                <div className="flex flex-col w-full gap-8 px-6 py-6 lg:flex-row ">
                    <div data-aos="zoom-in" className="flex flex-col items-center lg:max-h-[40rem] justify-center p-4 bg-white rounded-lg shadow-md lg:top-[6rem] lg:w-[30%] lg:left-20 lg:sticky w-fit">
                        <div className="w-full p-8 bg-white rounded-lg">
                            <img src={profile} className="w-full px-2 pt-2 rounded-lg bg-gradient-to-br from-green-200 via-green-400 to-green-600 drop-shadow-lg" alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-medium">Muhammad Rinaldi</h1>
                            <p className="text-sm text-gray-500"> @muhammadrinaldi7</p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-6 mt-6 text-green-600">
                            <a href="https://www.github.com/muhammadrinaldi7/" target="_blank"><FontAwesomeIcon icon={faGithub} className="w-6 h-6 p-2 bg-gray-100 rounded-full"/></a>
                            <a href="https://www.linkedin.com/in/muhammadrinaldi7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 p-2 bg-gray-100 rounded-full"/></a>
                            <a href="https://www.instagram.com/_mrinaldi" target="_blank"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 p-2 bg-gray-100 rounded-full"/></a>
                            <a href="https://wa.me/+6289523196044" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 p-2 bg-gray-100 rounded-full"/></a>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full">
                            <button className="w-full px-4 py-3 mt-6 font-medium text-white bg-green-600 rounded-xl">Contact Me</button>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="z-30 flex gap-8 mt-0 flex-col lg:min-h-[100vh] scroll-smooth lg:w-[70%]">
                        <div className="flex flex-col gap-4">
                            <p className="text-xl font-medium text-left uppercase ">About Me</p>
                            <p className="text-justify text-gray-600">Saya adalah lulusan Teknik Informatika dari Universitas Islam Kalimantan (UNISKA) Muhammad Arsyad Al Banjari, dengan pengalaman kerja di PT. Kapuas Kencana Jaya (KKJ) dan PT. Nansarunai Mega Vision di bidang IT. Saya juga memiliki pengalaman magang di CV. Nusantara Jaya Komputer dan PT. Gawi Makmur Kalimantan.</p>
                            <p className="text-justify text-gray-600">Saat ini, saya sedang mendalami teknologi yang baru bagi saya, yaitu React.js, melalui bootcamp di bimbing.id. Melalui program tersebut, saya telah menghasilkan beberapa proyek dengan kombinasi frontend menggunakan React.js dan backend RESTful API dengan Laravel.</p>
                            <p className="text-justify text-gray-600">Saya memiliki kemampuan analisis yang baik serta pemahaman mendalam dalam bidang teknologi informasi. Mampu bekerja secara mandiri maupun dalam tim, saya adalah individu yang komunikatif dan berdedikasi tinggi dalam mencapai tujuan perusahaan. Saya siap memanfaatkan pengalaman serta keahlian teknis dan interpersonal yang saya miliki untuk memberikan kontribusi terbaik bagi perusahaan.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-xl font-medium text-left uppercase ">Experience</p>
                            <CardExpEdu
                                period="Oktober 2024 - Sekarang"
                                position="IT Support/Programmer"
                                company="PT. Nansarunai Mega Vision"
                            >
                               <ul className="ml-3 list-disc list-inside">
                                    <li>Menangani pengelolaan dan pemeliharaan sistem TI serta memberikan dukungan teknis kepada pengguna.</li>
                                    <li>Berpartisipasi dalam proyek pengembangan perangkat lunak, termasuk analisis, pengujian, dan implementasi solusi teknologi.</li>
                                    <li>Mengelola tugas-tugas administratif dan teknis, termasuk troubleshooting perangkat keras dan perangkat lunak.</li>
                               </ul>
                            </CardExpEdu>
                            <CardExpEdu
                                period="Januari - Agustus 2023"
                                position="IT Support/Programmer"
                                company="PT. Kapuas Kencana Jaya"
                            >
                               <ul className="ml-3 list-disc list-inside">
                                    <li>Menangani pengelolaan dan pemeliharaan sistem TI serta memberikan dukungan teknis kepada pengguna.</li>
                                    <li>Berpartisipasi dalam proyek pengembangan perangkat lunak, termasuk analisis, pengujian, dan implementasi solusi teknologi.</li>
                                    <li>Mengelola tugas-tugas administratif dan teknis, termasuk troubleshooting perangkat keras dan perangkat lunak.</li>
                               </ul>
                            </CardExpEdu>
                            {/* <CardExpEdu
                                period="2022 - 2023"
                                position="IT Support/Programmer"
                                company="PT. Nansarunai Mega Vision"
                            >
                               <ul className="ml-3 list-disc list-inside">
                                    <li>Menangani pengelolaan dan pemeliharaan sistem TI serta memberikan dukungan teknis kepada pengguna.</li>
                                    <li>Berpartisipasi dalam proyek pengembangan perangkat lunak, termasuk analisis, pengujian, dan implementasi solusi teknologi.</li>
                                    <li>Mengelola tugas-tugas administratif dan teknis, termasuk troubleshooting perangkat keras dan perangkat lunak.</li>
                               </ul>
                            </CardExpEdu> */}
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default AboutMe