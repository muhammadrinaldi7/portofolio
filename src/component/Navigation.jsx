import React, { useState, useEffect } from 'react';
const Navigation = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
          setIsMenuOpen(false);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return (
        <nav className={`w-full bg-gray-800 sticky top-0 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-opacity-90 drop-shadow-lg' : 'opacity-100'}`}>
            <div className="container px-8 py-5 lg:py-10">
                <div className="flex justify-between">
                    <h1 className="text-[#DEEEEA] text-2xl lg:pl-14 font-bold font-serif"><span className="text-[#BF1363] text-3xl font-bold">Rn</span>Develop</h1>
                    <div className="md:flex md:items-center md:gap-12">
                        <div aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-2 text-sm">
                            <li>
                            <a className="text-[#BF1363] font-bold bg-white/80 p-2 px-4 rounded-lg transition hover:text-white hover:bg-[#BF1363]/70" href="#"> About </a>
                            </li>
                            <li>
                            <a className="text-[#BF1363] font-bold bg-white/80 p-2 px-4 rounded-lg transition hover:text-white hover:bg-[#BF1363]/70" href="#"> Careers </a>
                            </li>

                            <li>
                            <a className="text-[#BF1363] font-bold bg-white/80 p-2 px-4 rounded-lg transition hover:text-white hover:bg-[#BF1363]/70" href="#"> History </a>
                            </li>

                            <li>
                            <a className="text-[#BF1363] font-bold bg-white/80 p-2 px-4 rounded-lg transition hover:text-white hover:bg-[#BF1363]/70" href="#"> Services </a>
                            </li>

                            <li>
                            <a className="text-[#BF1363] font-bold bg-white/80 p-2 px-4 rounded-lg transition hover:text-white hover:bg-[#BF1363]/70" href="#"> Projects </a>
                            </li>

                            <li>
                            <a className="text-[#BF1363] font-bold bg-white/80 p-2 px-4 rounded-lg transition hover:text-white hover:bg-[#BF1363]/70" href="#"> Blog </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    
                </div>
                {isMenuOpen && (
                        <div className="md:hidden bg-gray-800 overflow-auto">
                        <ul className="flex flex-col items-center gap-6 py-4 text-sm">
                        <li>
                            <a className="text-white transition hover:text-[#BF1363]/75" href="#"> About </a>
                            </li>
                            <li>
                            <a className="text-white transition hover:text-[#BF1363]/75" href="#"> Careers </a>
                            </li>

                            <li>
                            <a className="text-white transition hover:text-[#BF1363]/75" href="#"> History </a>
                            </li>

                            <li>
                            <a className="text-white transition hover:text-[#BF1363]/75" href="#"> Services </a>
                            </li>

                            <li>
                            <a className="text-white transition hover:text-[#BF1363]/75" href="#"> Projects </a>
                            </li>

                            <li>
                            <a className="text-white transition hover:text-[#BF1363]/75" href="#"> Blog </a>
                            </li>
                        </ul>
                        </div>
                    )}
            </div>
        </nav>
    )
}
export default Navigation