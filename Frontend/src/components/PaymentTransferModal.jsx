// src/components/PaymentTransferModal.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const PaymentTransferModal = ({ order, onClose }) => {
  const myWhatsAppNumber = "542804389134";
  const mensaje = encodeURIComponent(
    `Hola, ya realicé la transferencia para mi pedido: ${order.name}. El pedido es para el día ${order.date}. Por favor, confirmá la recepción.`
  );
  const whatsappLink = `https://wa.me/${myWhatsAppNumber}?text=${mensaje}`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-xl font-bold text-green-700 mb-3">💰 Transferencia Bancaria</h3>
        <p className="text-gray-700 mb-2">
          Por favor, realiza la transferencia al siguiente alias:
        </p>
        <div className="bg-green-100 text-green-800 font-semibold px-3 py-2 rounded-md inline-block my-2">
          pablo.prepizza
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Una vez realizada la transferencia, envía el comprobante por WhatsApp.
        </p>
        <div className="flex justify-end space-x-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Enviar comprobante
          </a>
          <button
            onClick={onClose}
            className="py-2 px-4 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransferModal;
