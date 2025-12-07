import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { CardProject } from "../../component/Card/CardProject";
import simpeg from "../../assets/img/simpeg.png";
import absensi from "../../assets/img/absensi.png";
import petshop from "../../assets/img/petshop.png";
import bpn from "../../assets/img/bpn.png";
import meatgenkz from "../../assets/img/meatgenkz.png";
import nansarunai from "../../assets/img/nansarunai.png";
import sijantan from "../../assets/img/sijantan.png";
import sibetina from "../../assets/img/sibetina.png";
import travelyou from "../../assets/img/travelyou.png";
import showcar from "../../assets/img/showcar.png";
import syb from "../../assets/img/syb.png";
import pdl from "../../assets/img/pdl.png";
import api from "../../assets/img/api.png";
import rentcar from "../../assets/img/rentcar.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out",
      duration: 1500, // Durasi animasi (milidetik)
      once: false,
    });
  }, []);
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <div
          className="flex items-center justify-center w-full py-8"
          data-aos="fade-up"
        >
          <FontAwesomeIcon icon={faCode} className="text-green-500" size="2x" />
          <h1 className="mx-4 text-2xl font-bold text-center uppercase lg:text-4xl">
            SHOW Project
          </h1>
          <FontAwesomeIcon icon={faCode} className="text-green-500" size="2x" />
        </div>
        <div
          className="grid grid-cols-1 gap-8 p-2 lg:grid-cols-3"
          data-aos="zoom-in"
        >
          <CardProject
            image={pdl}
            links="https://padeltown.syihabstore.id"
            title="Laravel Blade + Livewire"
            project="Booking Online Leoon Padel"
          />
          <CardProject
            image={syb}
            links="https://syihabstore.id"
            title="Laravel Blade + Livewire"
            project="E-commerce Syihab Store"
          />
          <CardProject
            image={showcar}
            links="https://showroomcar-fe.vercel.app/"
            title="Next JS & Backend API Laravel"
            project="Web Showroom Mobil"
          />

          <CardProject
            image={rentcar}
            links="https://rentalline.vercel.app/"
            title="Next JS & Backend API Laravel (Payment Gateway Xendit)"
            project="Web App Rental Mobil"
          />
          <CardProject
            image={travelyou}
            links="https://travelyou.vercel.app/"
            title="Next JS & Backend API Laravel"
            project="Aplikasi Transaksi Travel"
          />
          <CardProject
            image={sijantan}
            links="https://sipp.banjarbarukota.go.id/"
            title="React Js & Backend API Laravel"
            project="Aplikasi Monitoring Bayi Bebas Penyakit Jantung Bawaan"
          />
          <CardProject
            image={sibetina}
            links="https://temansetiaibuhamil.banjarbarukota.go.id/"
            title="React Js & Backend API Laravel"
            project="Aplikasi Monitoring Ibu Hamil Bebas Anemia"
          />
          <CardProject
            image={nansarunai}
            links="https://nansarunaimegavision.org/"
            title="Html, css, js"
            project="Landing Page Nansarunai"
          />
          <CardProject
            image={meatgenkz}
            links="https://meatgenkz.nansarunaimegavision.org/"
            title="Html, css, js"
            project="Landing Page Meatgenkz"
          />
          <CardProject image={petshop} title="Laravel" project="Web Petshop" />
          <CardProject
            image={bpn}
            title="CodeIgniter"
            project="Sistem Informasi Permohonan Pengukuran"
          />
          <CardProject
            image={simpeg}
            title="CodeIgniter"
            project="Sistem Informasi Kepegawaian"
          />
          <CardProject
            image={absensi}
            title="CodeIgniter"
            project="Sistem Informasi Absensi"
          />

          <CardProject
            image={api}
            links="https://rent-car-api.temansetiaibuhamil.web.id/"
            title="Laravel API"
            project="Backend API App Rental Mobil"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project;
