import { useState, useRef } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap,faXmark } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        Aos.init({
            easing: "ease-in",
            duration: 1500, // Durasi animasi (milidetik)
            once: false, // Animasi hanya muncul sekali
        });
    }, []);
    const form = useRef();  // Menggunakan ref untuk form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cn10rn8', 'template_4e277tt', form.current, '_O1OKbk4_JhmSWdMi')
            .then((result) => {
                console.log(result.text); // Berhasil
                setIsSubmitted(true);
            }, (error) => {
                console.log(error.text); // Gagal
                alert("Pesan gagal dikirim, coba lagi.");
            });
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            }); // Mengosongkan form setelah pengiriman
    };

    return (
        <>
            <Header />
            <section className="container px-6 py-8 mx-auto lg:px-10">
                <div className="flex flex-col justify-center w-full gap-5 lg:flex-row" data-aos="fade-down">
                    <div className="flex w-[30%] gap-8 flex-col p-2">
                        <h1 className="text-lg font-medium whitespace-nowrap">CONTACT INFO</h1>
                        <div className="flex items-center gap-6 whitespace-nowrap">
                            <div className="p-2 bg-white rounded-lg">
                                <FontAwesomeIcon size="2x" icon={faEnvelope}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="font-medium">Email</h1>
                                <p className="text-sm">muhammad.rinaldi007.mr@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 whitespace-nowrap">
                            <div className="p-2 bg-white rounded-lg">
                                <FontAwesomeIcon size="2x" icon={faWhatsapp}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="font-medium">Whatsapp</h1>
                                <p>+62 895-2319-6044</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 whitespace-nowrap lg:whitespace-normal">
                            <div className="p-2 bg-white rounded-lg">
                                <FontAwesomeIcon size="2x" icon={faMap}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="font-medium">Maps</h1>
                                <p>Jl. Kelurahan, Lianganggang, Banjarbaru</p>
                            </div>
                        </div>
                        <h1 className="text-lg font-medium whitespace-nowrap">SOCIAL INFO</h1>
                        <div className="flex gap-5 text-4xl">
                            <a href="https://www.instagram.com/_mrinaldi" target="_blank">
                                <FontAwesomeIcon className="p-3 bg-white rounded-full" icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammadrinaldi7" target="_blank">
                                <FontAwesomeIcon className="p-3 bg-white rounded-full" icon={faLinkedin} />
                            </a>
                            <a href="https://wa.me/6289523196044" target="_blank">
                                <FontAwesomeIcon className="p-3 bg-white rounded-full" icon={faWhatsapp} />
                            </a>
                        </div>
                    </div>
                    <div className="flex w-[100%] flex-col p-6 bg-white rounded-xl" data-aos="fade-down">
                        <h1 className="text-4xl font-medium">Let's Work Together</h1>
                        {isSubmitted && <div className="flex justify-between p-4 mt-4 text-green-500 bg-white drop-shadow-lg rounded-xl"> <p>Pesan Anda berhasil dikirim!</p> <button onClick={() => setIsSubmitted(false)}><FontAwesomeIcon icon={faXmark}/></button></div>}
                        <form ref={form} onSubmit={handleSubmit}>
                            <input
                                name="name"
                                placeholder="Name"
                                className="w-full p-4 mt-4 border border-gray-200 rounded-lg shadow-sm"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                className="w-full p-4 mt-4 border border-gray-200 rounded-lg shadow-sm"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                name="subject"
                                placeholder="Subject"
                                className="w-full p-4 mt-4 border border-gray-200 rounded-lg shadow-sm"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="w-full p-4 mt-4 border border-gray-200 rounded-lg shadow-sm"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <button className="w-full p-4 mt-4 text-white bg-black rounded-lg" type="submit">Send</button>
                        </form>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
