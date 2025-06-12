// src/components/PaymentTransfer.jsx
import React from "react";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa"; // Importamos el icono de WhatsApp
import { motion } from "framer-motion";


const PaymentTransfer = ({ order, totalPrice }) => {
  const myWhatsAppNumber = "542804389134"; // Número en formato internacional
  const finalAddress = order.delivery === "envio" ? order.address : "Brown 311";

  // Formatear el total para que se vea correctamente
  const formattedTotal = Number(totalPrice).toLocaleString();

  // Mensaje automático con el monto exacto
const mensaje = encodeURIComponent(
  `Hola, ya realicé la transferencia para mi pedido: ${order.name}. El pedido es para el día ${order.date}. Total transferido: $${formattedTotal}. Dirección: ${finalAddress}. Adjunto el comprobante a continuación.`
);

  const whatsappLink = `https://wa.me/${myWhatsAppNumber}?text=${mensaje}`;

  return (
    <div className="p-6 border-2 border-green-600 bg-green-50 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-bold text-green-700 mb-3">💰 Transferencia Bancaria</h3>
      
      <p className="text-gray-700">
        Realizá la transferencia al siguiente alias:
      </p>
     <div className="flex items-center bg-green-100 text-green-800 font-semibold px-3 py-2 rounded-md inline-block my-2 gap-2">
  <span>pablo.prepizza</span>
 <motion.button
  onClick={() => {
    navigator.clipboard.writeText("pablo.prepizza");
    alert("Alias copiado al portapapeles!");
  }}
  className="flex items-center gap-1 text-green-700 text-sm hover:text-green-900 transition"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  <FaRegCopy className="text-base" />
  Copiar
</motion.button>

</div>


      <p className="text-gray-700">
        <strong>Total a transferir:</strong> ${formattedTotal}
      </p>
      
      <p className="text-gray-700">
        <strong>Dirección de entrega:</strong> {finalAddress}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        Enviá el comprobante por WhatsApp para confirmar tu pedido.
      </p>

      {/* Botón de WhatsApp */}
      <motion.a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.9 }}
>
  <FaWhatsapp className="mr-2 text-xl" /> Enviar comprobante
</motion.a>

    </div>
  );
};

export default PaymentTransfer;
