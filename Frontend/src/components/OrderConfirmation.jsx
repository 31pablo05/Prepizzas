// src/components/OrderConfirmation.jsx
import React from 'react';
import { FaWhatsapp, FaRegCopy } from 'react-icons/fa';
import PaymentTransfer from './PaymentTransfer';


const OrderConfirmation = ({ order, onNewOrder, paymentMethod }) => {
  console.log("🔍 En OrderConfirmation, paymentMethod:", paymentMethod);

  const precioUnitario = 1500;
  const costoEnvio = 1000;
  const subtotal = order.quantity * precioUnitario;
  const totalPrice = order.delivery === 'envio' ? subtotal + costoEnvio : subtotal;

  // Datos de transferencia
  const myWhatsAppNumber = '542804389134';
  const finalAddress = order.delivery === 'envio' ? order.address : 'Brown 311';
  const formattedTotal = totalPrice.toLocaleString();
  const mensaje = encodeURIComponent(
    `Hola, ya realicé la transferencia para mi pedido: ${order.name}. El pedido es para el día ${order.date}. Total transferido: $${formattedTotal}. Dirección: ${finalAddress}. Por favor, confirmá la recepción.`
  );
  const whatsappLink = `https://wa.me/${myWhatsAppNumber}?text=${mensaje}`;
console.log("🔍 OrderConfirmation props:", { paymentMethod, delivery: order.delivery });

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
          {order.delivery === 'envio' ? (
            <li><strong>Dirección de envío:</strong> {order.address}</li>
          ) : (
            <li><strong>Podes Retirar tu pedido en:</strong> Brown 311</li>
          )}
          <li className="text-lg font-semibold text-green-700">
            <strong>Total a Pagar:</strong> ${totalPrice.toLocaleString()}
          </li>
          <li><strong>Método de Pago:</strong> <span className="capitalize">{paymentMethod}</span></li>
        </ul>

        {/* Inlined PaymentTransfer */}
       {paymentMethod === 'transferencia' && (
  <PaymentTransfer order={order} totalPrice={totalPrice} />
)}

        <button
          onClick={onNewOrder}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-full"
        >
          Hacer otro pedido
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Por cualquier consulta no dudes en escribirnos por&nbsp;
          <a
            href="https://wa.me/542804389134"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold underline"
          >
            WhatsApp al 280 438 9134
          </a>.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
