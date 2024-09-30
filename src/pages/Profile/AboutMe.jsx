import Header from "../../component/Header"
import Footer from "../../component/Footer"
import profile from "../../assets/img/profile1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { CardExpEdu } from "../../component/Card/CardExpEdu"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const AboutMe = () => {
    useEffect(() => {
        Aos.init({
            easing: "ease-out",
            duration: 1500, // Durasi animasi (milidetik)
            once: false, // Animasi hanya muncul sekali
        });
    }, []);
    return (
        <>
            <Header />
            <section className="container mx-auto scroll-smooth" >
                <div className="flex flex-col w-full gap-8 px-6 py-6 lg:flex-row ">
                    <div data-aos="zoom-in" className="flex flex-col items-center lg:max-h-[40rem] justify-center p-4 bg-white/75 rounded-lg shadow-md lg:top-[6rem] lg:w-[30%] lg:left-20 lg:sticky w-fit">
                        <div className="w-full p-8 mb-2 bg-white rounded-lg shadow-md">
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
                    <div data-aos="fade-up" className="z-30 flex gap-8 mt-0 flex-col px-12 lg:min-h-[100vh] scroll-smooth lg:w-[70%]">
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
                                    <li>Menangani pengelolaan dan pemeliharaan sistem TI serta memberikan dukungan teknis serta perangkat kepada pengguna.</li>
                                    <li>Membuat laporan analisa penjualan perusahaan di semua cabang lewat query SQL dengan SAP HanaSQL.</li>
                                    <li>Menganalisa kesalahan transaksi user dan kerusakan perangkat.</li>
                                    <li>Memelihara dan maintanance server cloud dan lokal serta seluruh perangkat secara berkala.</li>

                               </ul>
                            </CardExpEdu>
                            <CardExpEdu
                                period="Oktober - November 2021"
                                position="Assisten Human Ressource Development (Internship)"
                                company="PT. Gawi Makmur Kalimantan"
                            >
                               <ul className="ml-3 list-disc list-inside">
                                    <li>Merekap database karyawan dan memfilter data berdasarkan kategori.</li>
                                    <li>Menganalisa dan membuat graf karyawan berdasarkan data.</li>
                               </ul>
                            </CardExpEdu>
                            <CardExpEdu
                                period="Februari - April 2017"
                                position="Teknisi Komputer (Internship)"
                                company="CV. Nusantara Jaya Computer"
                            >
                               <ul className="ml-3 list-disc list-inside">
                                    <li>Menganalisa dan melakukan perbaikan pada PC.</li>
                                    <li>Membantu dalam instalasi sistem operasi dan aplikasi.</li>
                                    <li>Membantu pembongkaran dan perakitan PC.</li>
                               </ul>
                            </CardExpEdu>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-xl font-medium text-left uppercase ">Education</p>
                            <CardExpEdu
                                period="Juni 2024 - Sekarang"
                                position="FrontEnd Developer"
                                company="Dibimbing.id"
                            >
                               <ul className="ml-3 list-disc list-inside">
                                <li>Tech Stack: React.js.</li> 
                                <li>Version Control: Git</li>  
                                <li>State Management: Redux</li>
                                <li>Frameworks: Next.js, Express.js</li>
                                <li>Key Skills:
                                    <ul className="ml-5 list-inside">
                                        <li>- JavaScript basics and advanced topics</li>
                                        <li>- Git workflow and collaboration</li>
                                        <li>- Building scalable React applications</li>
                                        <li>- Introduction to backend with Express.js</li>
                                        <li>- Server-side rendering with Next.js</li>
                                    </ul>
                                </li>
                                </ul>
                            </CardExpEdu>
                            <CardExpEdu
                                period="2018 - 2022"
                                position="S1 Teknik Informatika"
                                company="Universitas Islam Kalimantan Muhammad Arsyad Al Banjari "
                            >
                               <ul className="ml-3 list-disc list-inside">
                                   <li>Mengikuti beberapa program pelatihan praktikum basis data,program paket niaga, pemrograman web dan
                                   pemrograman android.</li>
                                   <li>Mengikuti ujian lembaga sertifikasi profesi komputer dan mendapatkan hasil kompeten dari BNSP.</li>
                                   <li>
                                   Menguasai beberapa bahasa pemrograman PHP, Visual Basic, VB.net, Java, dan SQL serta framework bootstrap dan codeigniter 3.
                                   </li>
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