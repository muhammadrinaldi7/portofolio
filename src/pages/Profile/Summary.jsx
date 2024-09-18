import Header from "../../component/Header"
import profile from "../../assets/img/profile.png"
const Summary = () => {
    return (
        <>
        <Header />
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col w-full gap-4 mb-10 text-center lg:flex-row">
                    <div className="">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="p-8 bg-white rounded-lg">
                            <img
                                alt="team"
                                className="flex-shrink-0 object-contain bg-blue-500 rounded-lg w-80 h-60"
                                src={profile}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col w-full h-full">
                            <h1 className="mb-4 font-serif text-3xl font-bold text-black">SELF SUMMARY</h1>
                            <div className="flex-grow w-full px-8 pt-20 pb-8 text-left bg-white rounded-lg">
                                <h2 className="text-4xl font-medium text-gray-900 title-font">Muhammad Rinaldi</h2>
                                <p className="mt-2 text-justify text-gray-600">Saya adalah seorang Full-Stack Web Developer berbasis di Indonesia dengan fokus pada pengembangan aplikasi web. Saya memiliki pengalaman yang beragam dalam bekerja di berbagai industri, terutama dalam bidang teknologi informasi. Menguasai berbagai framework seperti CodeIgniter, Laravel, React.js, TailwindCSS, dan Bootstrap, saya telah beberapa kali mengerjakan proyek yang menggabungkan React.js sebagai frontend dan Laravel sebagai backend RESTful API.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-8 mb-20 lg:flex-row">
                    <div className="w-full p-6 bg-white rounded-lg lg:w-1/2">
                        <h1 className="text-xl uppercase">Experience</h1>
                        
                    </div>
                    <div className="w-full p-6 bg-white rounded-lg lg:w-1/2">
                        <h1>Education</h1>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Summary