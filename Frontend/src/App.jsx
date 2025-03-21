// src/App.jsx
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  const [view, setView] = useState('landing'); // 'landing', 'order' o 'confirmation'
  const [orderData, setOrderData] = useState(null);

  const handleStart = () => {
    setView('order');
  };

  const handleSubmitOrder = (order) => {
    // Aquí, en el futuro, se enviará el pedido a Google Sheets
    setOrderData(order);
    setView('confirmation');
  };

  const handleNewOrder = () => {
    setOrderData(null);
    setView('order');
  };

  return (
    <div className="min-h-screen">
      {view === 'landing' && <LandingPage onStart={handleStart} />}
      {view === 'order' && <OrderForm onSubmit={handleSubmitOrder} />}
      {view === 'confirmation' && orderData && <OrderConfirmation order={orderData} onNewOrder={handleNewOrder} />}
    </div>
  );
}

export default App;
