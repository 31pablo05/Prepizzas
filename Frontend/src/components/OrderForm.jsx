// src/components/OrderForm.jsx
import React, { useState, useEffect } from 'react';
import PaymentOptions from './PaymentOptions';
import Contact from './Contact';
import { sendOrderToSheet } from '../api/sendOrderToSheet';
import PaymentTransferModal from './PaymentTransferModal';

const OrderForm = ({ onSubmit }) => {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    date: '',
    address: '',
    delivery: 'recoger', // 'recoger' o 'envio'
  });
  const [totalPrice, setTotalPrice] = useState(2000);
  const [paymentMethod, setPaymentMethod] = useState(null); // 'mercadopago', 'efectivo' o 'transferencia'
  const [showTransferModal, setShowTransferModal] = useState(false);

  // Recalcular el precio total según cantidad y tipo de entrega
  useEffect(() => {
    let price = order.quantity * 2000;
    if (order.delivery === 'envio') price += 1000;
    setTotalPrice(price);
  }, [order.quantity, order.delivery]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  // Función para procesar el pago con MercadoPago
  const handleMercadopagoPayment = async () => {
    try {
      const response = await fetch("https://tiendaprepizzas.onrender.com/api/create_preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order }),
      });
      const data = await response.json();
      if (data.init_point) {
        // Redirige a la URL de pago de MercadoPago
        window.location.href = data.init_point;
      } else {
        console.error("Error al crear la preferencia de pago:", data.error);
        alert("Hubo un error al procesar el pago con MercadoPago. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error en la conexión con la API:", error);
      alert("Error de conexión. Verifica tu red.");
    }
  };

  // Función de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!order.name || !order.email || !order.phone || !order.date) {
      alert("Por favor, completa los campos obligatorios: Nombre, Email, Teléfono y Fecha.");
      return;
    }

    // Validar formato del teléfono
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(order.phone)) {
      alert("El número de teléfono no es válido.");
      return;
    }

    // Validar fecha mínima (al menos un día después de hoy)
    const selectedDate = new Date(order.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 1);
    if (selectedDate < minDate) {
      alert("La fecha de entrega debe ser, al menos, un día después de hoy.");
      return;
    }

    // Validar cantidad (mínimo 2, máximo 20)
    if (order.quantity < 2 || order.quantity > 20) {
      alert("La cantidad de prepizzas debe ser entre 2 y 20.");
      return;
    }

    // Validar dirección si es envío
    if (order.delivery === "envio" && !order.address) {
      alert("Por favor, ingresa la dirección para el envío.");
      return;
    }

    // Procesar según el método de pago
    if (paymentMethod === "efectivo") {
      // Se registra el pedido y se muestra la confirmación
      await sendOrderToSheet({ ...order, total: totalPrice, estadoPago: "pendiente" });
      onSubmit(order);
      alert("Pedido enviado. Gracias por tu compra.");
    } else if (paymentMethod === "mercadopago") {
      await handleMercadopagoPayment();
    } else if (paymentMethod === "transferencia") {
      // Envío de la orden, pero no se llama a onSubmit de inmediato
      await sendOrderToSheet({ ...order, total: totalPrice, estadoPago: "pendiente" });
      // Se muestra el modal con las instrucciones de transferencia
      setShowTransferModal(true);
    } else {
      alert("Por favor, selecciona un método de pago.");
    }
  };

  // Esta función se llama cuando el usuario finaliza la transferencia desde el modal
  const handleTransferFinish = () => {
    setShowTransferModal(false);
    onSubmit(order);
    alert("Pedido confirmado. Gracias por tu compra.");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="/assets/background.webp"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Contenedor del formulario */}
      <div className="relative z-10 w-full max-w-lg mx-4 p-6 bg-white bg-opacity-10 rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-3xl font-extrabold text-center mb-6 
          bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text 
          drop-shadow-md animate-fade-in"
        >
          Realiza tu Pedido
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-lg font-medium text-black-700">Nombre</label>
            <input
              type="text"
              name="name"
              value={order.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black-700">Email</label>
            <input
              type="email"
              name="email"
              value={order.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black-700">Teléfono</label>
            <input
              type="text"
              name="phone"
              value={order.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black-700">Cantidad de Prepizzas</label>
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              min="1"
              required
              className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-1 text-md text-black-600">
              Precio total: ${totalPrice.toLocaleString()}
            </p>
          </div>
          <div>
            <label className="block text-lg font-medium text-black-700">Fecha de entrega/recogida</label>
            <input
              type="date"
              name="date"
              value={order.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black-700">Tipo de entrega</label>
            <select
              name="delivery"
              value={order.delivery}
              onChange={handleChange}
              className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recoger">Recoger en local</option>
              <option value="envio">Envío a domicilio (+$1000)</option>
            </select>
          </div>
          {order.delivery === "envio" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                type="text"
                name="address"
                value={order.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Selección del método de pago */}
          <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded mt-4 transition-colors hover:bg-green-600">
            {paymentMethod === "mercadopago" ? "Procesar Pago" : "Enviar Pedido"}
          </button>
        </form>
      </div>

      <div className="relative z-10 w-full max-w-lg mt-6 mx-4">
        <Contact />
      </div>

      {/* Modal para instrucciones de transferencia */}
      {showTransferModal && (
        <PaymentTransferModal
          order={order}
          onClose={() => setShowTransferModal(false)}
          onFinishPayment={handleTransferFinish}
        />
      )}
    </div>
  );
};

export default OrderForm;
