// src/components/PaymentTransfer.jsx
import React from 'react';

const PaymentTransfer = ({ order }) => {
  const myWhatsAppNumber = "542804389134"; // Reemplazá con tu número en formato internacional
  const mensaje = encodeURIComponent(
    `Hola, ya realicé la transferencia para mi pedido: ${order.name}. El pedido es para el día ${order.date}. Por favor, confirmá la recepción.`
  );
  const whatsappLink = `https://wa.me/${myWhatsAppNumber}?text=${mensaje}`;

  return (
    <div className="p-4 border rounded mt-4">
      <h3 className="text-lg font-bold">Transferencia Bancaria</h3>
      <p>
        Realizá la transferencia al siguiente alias: <strong>TU_ALIAS</strong>
      </p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Enviar comprobante por WhatsApp
      </a>
    </div>
  );
};

export default PaymentTransfer;
