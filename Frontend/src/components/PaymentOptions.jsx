// src/components/PaymentOptions.jsx
import React from 'react';

const PaymentOptions = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Elige tu método de pago:</h3>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
        <button
          type="button"
          onClick={() => setPaymentMethod("efectivo")}
          className={`py-2 px-4 rounded ${
            paymentMethod === "efectivo"
              ? "bg-blue-700 text-white border-2 border-blue-900"
              : "bg-blue-500 text-white"
          }`}
        >
          Pagar en entrega
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("transferencia")}
          className={`py-2 px-4 rounded ${
            paymentMethod === "transferencia"
              ? "bg-blue-700 text-white border-2 border-blue-900"
              : "bg-blue-500 text-white"
          }`}
        >
          Pagar por Transferencia
        </button>
      </div>
      {paymentMethod && (
        <p className="mt-2 text-md text-black-700">
          Has seleccionado:{" "}
          <span className="font-bold capitalize">{paymentMethod}</span>
        </p>
      )}
    </div>
  );
};

export default PaymentOptions;
