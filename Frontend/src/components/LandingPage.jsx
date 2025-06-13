import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = ({ onStart }) => {
  const [startTransition, setStartTransition] = useState(false);

  const handleClick = () => {
    setStartTransition(true);
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!startTransition && (
        <motion.div
          className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Imagen de fondo */}
          <motion.div
            className="absolute inset-0 -z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="/assets/webp/fondoprepizza.webp"
              alt="Fondo de Prepizzas"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Capa de gradiente con blur */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black opacity-30 backdrop-blur-sm transition-opacity duration-700"></div>

          {/* Contenido con fade out al salir */}
          <motion.div
            className="relative z-10 bg-transparent bg-opacity-50 p-6 sm:p-8 md:p-12 rounded-lg text-center shadow-lg"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              ¡Prepizzas Caseras!
            </motion.h1>

            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 hover:shadow-red-500/50 transition-shadow duration-200"
            >
              Hacer mi Pedido
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Capa de transición suave con blur */}
      {startTransition && (
        <motion.div
          className="fixed inset-0 bg-transparent backdrop-blur-md z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
  );
};

export default LandingPage;
