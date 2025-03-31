// src/components/OrderConfirmation.jsx
import React from 'react';
import PaymentTransfer from './PaymentTransfer';

const OrderConfirmation = ({ order, onNewOrder, paymentMethod }) => {
  // Definir precios
  const precioUnitario = 1500; // Precio por prepizza
  const costoEnvio = 1000; // Costo de envío si aplica

  // Calcular total
  const subtotal = order.quantity * precioUnitario;
  const totalPrice = order.delivery === "envio" ? subtotal + costoEnvio : subtotal;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <img
          src="/assets/webp/PreparandoOrden.webp"
          alt="Confirmación"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative z-10 max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Pedido Confirmado</h2>
        <p className="text-lg text-gray-800 mb-4">
          ¡Gracias por tu pedido, <span className="font-semibold">{order.name}</span>!
        </p>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Teléfono:</strong> {order.phone}</li>
          <li><strong>Cantidad:</strong> {order.quantity} prepizzas</li>
          <li><strong>Fecha:</strong> {order.date}</li>
          {order.delivery === "envio" ? (
            <li><strong>Dirección de envío:</strong> {order.address}</li>
          ) : (
            <li><strong>Podes Retirar tu pedido en:</strong> Brown 311</li>
          )}
          <li className="text-lg font-semibold text-green-700">
            <strong>Total a transferir:</strong> ${totalPrice.toLocaleString()}
          </li>
        </ul>

        {/* Si el método es transferencia, mostramos las instrucciones */}
        {paymentMethod === "transferencia" && (
          <PaymentTransfer order={order} totalPrice={totalPrice} />
        )}

        <button onClick={onNewOrder} className="mt-6 w-full bg-blue-500 text-white py-3 rounded-full">
          Hacer otro pedido
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
