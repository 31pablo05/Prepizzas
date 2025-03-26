// src/components/PaymentMercadoPago.jsx
import React from 'react';

const PaymentMercadoPago = () => {
  const handleMercadoPagoPayment = () => {
    // Aquí iría la lógica para iniciar el pago con MercadoPago
    console.log("Procesando pago con MercadoPago...");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-2">Pago con MercadoPago</h3>
      <button
        type="button"
        onClick={handleMercadoPagoPayment}
        className="py-2 px-4 rounded bg-yellow-500 text-white hover:bg-yellow-600"
        title="Pago con tarjeta: se redirigirá a MercadoPago"
      >
        Pagar con MercadoPago
      </button>
    </div>
  );
};

export default PaymentMercadoPago;
