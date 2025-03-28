// src/components/LandingPage.jsx
import React from "react";

const LandingPage = ({ onStart }) => {
  const handleClick = () => {
    onStart();
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-20 animate-fadeInSlow">
        <img
          src="/assets/webp/fondoprepizza.webp"
          alt="Fondo de Prepizzas"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Capa de gradiente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black opacity-70 transition-opacity duration-700"></div>

      {/* Contenido principal */}
      <div className="relative z-10 bg-black bg-opacity-50 p-6 sm:p-8 md:p-12 rounded-lg text-center animate-slideUp shadow-lg">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg animate-pulse">
          ¡Prepizzas Caseras!
        </h1>
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg transform transition duration-300 hover:scale-105 active:scale-95 shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Hacer Pedido
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
