// src/App.jsx
import React, { useState, useRef } from 'react';
import LandingPage from './components/LandingPage';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [view, setView] = useState('landing'); // 'landing', 'order' o 'confirmation'
  const [orderData, setOrderData] = useState(null);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
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
    // Retraso de 2 segundos antes de cambiar a la vista 'order'
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
    <div className="min-h-screen">
      {/* Reproductor de audio global */}
      <AudioPlayer ref={audioRef} />

      {view === 'landing' && <LandingPage onStart={handleStart} />}
      {view === 'order' && <OrderForm onSubmit={handleSubmitOrder} />}
      {view === 'confirmation' && orderData && <OrderConfirmation order={orderData} onNewOrder={handleNewOrder} />}
    </div>
  );
}

export default App;
