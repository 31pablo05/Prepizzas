// src/components/OrderConfirmation.jsx
import React from 'react';

const OrderConfirmation = ({ order, onNewOrder }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <img src="/assets/PreparandoOrden.png" alt="Confirmación" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Pedido Confirmado</h2>
        <p className="text-lg text-gray-800 mb-4">
          ¡Gracias por tu pedido, <span className="font-semibold">{order.name}</span>!
        </p>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Teléfono:</strong> {order.phone}</li>
          <li><strong>Cantidad:</strong> {order.quantity}</li>
          <li><strong>Fecha:</strong> {order.date}</li>
          {order.address && <li><strong>Dirección:</strong> {order.address}</li>}
        </ul>
        <button onClick={onNewOrder} className="mt-6 w-full bg-blue-500 text-white py-3 rounded-full">
          Hacer otro pedido
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
