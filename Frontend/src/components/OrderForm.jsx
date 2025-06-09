// src/components/OrderForm.jsx
import React, { useState, useEffect } from 'react';
import PaymentOptions from './PaymentOptions';
import Contact from './Contact';
import OrderConfirmation from './OrderConfirmation';
import OrderInputs from './OrderInputs';
import DeliveryDetails from './DeliveryDetails';
import SubmitButton from './SubmitButton';
import { useOrderValidation } from '../hooks/useOrderValidation';

const OrderForm = () => {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    date: '',
    address: '',
    delivery: 'recoger',
  });
  const [totalPrice, setTotalPrice] = useState(1500);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    let price = order.quantity * 1500;
    if (order.delivery === 'envio') price += 1000;
    setTotalPrice(price);
  }, [order]);

  const handleChange = (e) =>
    setOrder({ ...order, [e.target.name]: e.target.value });

  const handleMercadopagoPayment = async () => {
    try {
      const res = await fetch(
        "https://tiendaprepizzas.onrender.com/api/create_preference",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order }),
        }
      );
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        throw new Error(data.error || 'Error al crear preferencia');
      }
    } catch (err) {
      alert("Error con MercadoPago: " + err.message);
    }
  };

  // Aquí invocamos el hook SIN pasarle ningún setter externo
  const {
    handleSubmit,
    isLoading,
    orderSubmitted,
    setOrderSubmitted,
  } = useOrderValidation({
    order,
    paymentMethod,
    totalPrice,
    handleMercadopagoPayment,
  });

  // Debug en consola
  console.log("🔍 [OrderForm] paymentMethod state:", paymentMethod);

  if (orderSubmitted) {
    return (
      <OrderConfirmation
        order={order}
        paymentMethod={paymentMethod}
        onNewOrder={() => {
          setOrder({
            name: '',
            email: '',
            phone: '',
            quantity: 1,
            date: '',
            address: '',
            delivery: 'recoger',
          });
          setPaymentMethod(null);
          setOrderSubmitted(false);
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/assets/background.webp"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-4 p-6 bg-white bg-opacity-10 rounded-lg shadow-md mt-6">
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
          Hace tu Pedido
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <OrderInputs
            order={order}
            handleChange={handleChange}
            totalPrice={totalPrice}
          />
          <DeliveryDetails order={order} handleChange={handleChange} />
          <PaymentOptions
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <SubmitButton
            isLoading={isLoading}
            paymentMethod={paymentMethod}
          />
        </form>
      </div>

      <div className="relative z-10 w-full max-w-lg mt-6 mx-4">
        <Contact />
      </div>
    </div>
  );
};

export default OrderForm;
