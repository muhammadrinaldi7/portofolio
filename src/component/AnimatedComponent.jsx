import React, { useState, useEffect } from 'react';

const AnimatedComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Menggunakan useEffect untuk memicu animasi saat komponen dimuat
  useEffect(() => {
    setIsLoaded(true); // Mengatur state isLoaded ke true setelah komponen dimuat
  }, []);

  return (
    <div
      className={`transition-opacity duration-1500 ease-out transform 
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="p-6 text-white bg-green-500 rounded-lg">
        <h1 className="text-3xl font-bold">Halaman Telah Dimuat</h1>
        <p>Ini adalah contoh animasi transisi saat halaman dimuat dengan Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default AnimatedComponent;
