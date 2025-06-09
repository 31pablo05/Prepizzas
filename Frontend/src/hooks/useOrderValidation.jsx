import { useState } from 'react';
import { sendOrderToSheet } from '../api/sendOrderToSheet';

export const useOrderValidation = ({ order, paymentMethod, totalPrice, onSubmit, handleMercadopagoPayment }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const validateOrder = () => {
    if (!order.name || !order.email || !order.phone || !order.date) {
      alert("Completa Nombre, Email, Teléfono y Fecha.");
      return false;
    }

    if (!/^[0-9]{7,15}$/.test(order.phone)) {
      alert("Teléfono inválido.");
      return false;
    }

    const selectedDate = new Date(order.date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("La fecha no puede ser en el pasado.");
      return false;
    }

    if (order.quantity < 1 || order.quantity > 40) {
      alert("Cantidad entre 1 y 40.");
      return false;
    }

    if (order.quantity > 6 && selectedDate.getTime() === today.getTime()) {
      alert("Para más de 6, debe ser un día posterior.");
      return false;
    }

    if (order.delivery === "envio" && !order.address) {
      alert("Ingresa la dirección de envío.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    if (!validateOrder()) {
      setIsLoading(false);
      return;
    }

    try {
      if (paymentMethod === "efectivo" || paymentMethod === "transferencia") {
        await sendOrderToSheet({ ...order, total: totalPrice, estadoPago: paymentMethod });
        
        // Unificamos flujo: mostramos solo OrderConfirmation
        onSubmit(order);
        setOrderSubmitted(true);
        setIsLoading(false);
      } else if (paymentMethod === "mercadopago") {
        await handleMercadopagoPayment();
        setIsLoading(false);
      } else {
        alert("Selecciona un método de pago.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error al procesar el pedido. Intenta de nuevo.");
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, orderSubmitted, setOrderSubmitted };
};
