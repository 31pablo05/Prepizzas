// src/components/PaymentOptions.jsx
import React from 'react';

const PaymentOptions = ({ setPaymentMethod }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium">Elige tu método de pago:</h3>
      <div className="flex space-x-4 mt-2">
        <button
          type="button"
          onClick={() => setPaymentMethod("mercadopago")}
          className="bg-yellow-500 text-white py-2 px-4 rounded"
        >
          Pagar con MercadoPago
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("efectivo")}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Pagar en entrega
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("transferencia")}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Pagar por Transferencia
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
