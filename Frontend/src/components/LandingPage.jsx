import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      {/* Imagen de fondo con z-index negativo y animación de zoom */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/assets/fondoprepizza.png" 
          alt="Fondo de Prepizzas" 
          className="w-full h-full object-cover object-center animate-zoomIn"
        />
      </div>

      {/* Capa de gradiente para oscurecer el fondo con fade in */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black opacity-70 animate-fadeIn"></div>

      {/* Contenedor principal de contenido con animación slide-up */}
      <div className="relative z-10 bg-black bg-opacity-50 p-6 sm:p-8 md:p-12 rounded-lg text-center animate-slideUp">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg animate-pulse">
          ¡Prepizzas Caseras!
        </h1>
        <button 
          onClick={onStart}
          className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded transform transition duration-300 hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Hacer Pedido
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
