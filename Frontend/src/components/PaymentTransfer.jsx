// src/components/PaymentTransfer.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importamos el icono de WhatsApp

const PaymentTransfer = ({ order }) => {
  const myWhatsAppNumber = "542804389134"; // Número en formato internacional
  const mensaje = encodeURIComponent(
    `Hola, ya realicé la transferencia para mi pedido: ${order.name}. El pedido es para el día ${order.date}. Por favor, confirmá la recepción.`
  );
  const whatsappLink = `https://wa.me/${myWhatsAppNumber}?text=${mensaje}`;

  return (
    <div className="p-6 border-2 border-green-600 bg-green-50 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-bold text-green-700 mb-3">💰 Transferencia Bancaria</h3>
      
      <p className="text-gray-700">
        Realizá la transferencia al siguiente alias: 
      </p>

      <div className="bg-green-100 text-green-800 font-semibold px-3 py-2 rounded-md inline-block my-2">
        pablo.prepizza
      </div>

      <p className="text-sm text-gray-600">Enviá el comprobante por WhatsApp para confirmar tu pedido.</p>

      {/* Botón de WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition"
      >
        <FaWhatsapp className="mr-2 text-xl" /> Enviar comprobante
      </a>
    </div>
  );
};

export default PaymentTransfer;
