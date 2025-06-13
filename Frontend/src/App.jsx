import React, { useState, useRef } from 'react';
import LandingPage from './components/LandingPage';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import AudioPlayer from './components/AudioPlayer';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [view, setView] = useState('landing'); // 'landing', 'order' o 'confirmation'
  const [orderData, setOrderData] = useState(null);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play()
        .then(() => {
          console.log("Audio reproduciéndose...");
        })
        .catch((error) => {
          console.error("Error reproduciendo el audio:", error);
        });
    }
  };

  const handleStart = () => {
    playAudio();
    setTimeout(() => {
      setView('order');
    }, 2000);
  };

  const handleSubmitOrder = (order) => {
    setOrderData(order);
    setView('confirmation');
  };

  const handleNewOrder = () => {
    setOrderData(null);
    setView('order');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo fijo para evitar pantallazo blanco */}
      <img
        src="/assets/webp/fondoprepizza.webp"
        alt="Fondo fijo"
        className="fixed inset-0 w-full h-full object-cover -z-30"
      />
      {/* Capa oscura encima para contraste */}
      <div className="fixed inset-0 bg-black opacity-30 -z-20"></div>

      <AudioPlayer ref={audioRef} />

      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <LandingPage onStart={handleStart} />
          </motion.div>
        )}

        {view === 'order' && (
          <motion.div
            key="order"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <OrderForm onSubmit={handleSubmitOrder} />
          </motion.div>
        )}

        {view === 'confirmation' && orderData && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <OrderConfirmation order={orderData} onNewOrder={handleNewOrder} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
