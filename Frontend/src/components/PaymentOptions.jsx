import React from 'react';

const PaymentOptions = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Elige tu método de pago:</h3>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
        <button
          type="button"
          onClick={() => setPaymentMethod("efectivo")}
          className={`py-2 px-4 rounded w-full sm:w-auto ${
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
          className={`py-2 px-4 rounded w-full sm:w-auto ${
            paymentMethod === "transferencia"
              ? "bg-blue-700 text-white border-2 border-blue-900"
              : "bg-blue-500 text-white"
          }`}
        >
          Pagar por Transferencia
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("mercadopago")}
          className={`py-2 px-4 rounded w-full sm:w-auto flex items-center justify-center gap-2 ${
            paymentMethod === "mercadopago"
              ? "bg-yellow-700 text-white border-2 border-yellow-900"
              : "bg-yellow-500 text-white"
          }`}
          title="Pago con tarjeta: se redirigirá a MercadoPago (apretar 'Procesar Pago' abajo)"
        >
          <img
            src="/assets/ico/mercadopago2.png"
            alt="MercadoPago"
            className="h-8 w-8 sm:h-12 sm:w-12"
          />
          <span className="text-sm sm:text-base">Pagar con Tarjeta</span>
          <img
            src="/assets/ico/tarjeta-de-debito.png"
            alt="Tarjetas"
            className="h-8 w-8 sm:h-12 sm:w-12"
          />
        </button>
      </div>
      {paymentMethod && (
        <p className="mt-6 text-lg text-black-700 font-semibold">
          Has seleccionado:{" "}
          <span className="font-bold capitalize">{paymentMethod}</span>
        </p>
      )}
    </div>
  );
};

export default PaymentOptions;
