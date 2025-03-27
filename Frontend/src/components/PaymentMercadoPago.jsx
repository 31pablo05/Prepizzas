import React from 'react';

const PaymentMercadoPago = ({ order }) => {
  const handleMercadoPagoPayment = async () => {
    try {
      // Enviar el objeto order completo a la API
      const response = await fetch("https://tiendaprepizzas.onrender.com/api/create_preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order }),
      });
      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        console.error("Error al crear la preferencia de pago:", data.error);
        alert("Hubo un error al procesar el pago con MercadoPago. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error en la conexión con la API:", error);
      alert("Error de conexión. Verifica tu red.");
    }
  };

  return (
    <div className="flex items-center p-2 bg-white border border-gray-300 rounded hover:bg-gray-100">
      <button
        type="button"
        onClick={handleMercadoPagoPayment}
        title="Pagar con MercadoPago"
        className="flex items-center w-full"
      >
        <img 
          src="/assets/ico/mercadopago2.png" 
          alt="MercadoPago" 
          className="h-12 w-12" 
        />
        <img 
          src="/assets/ico/tarjeta-de-debito.png" 
          alt="Tarjetas" 
          className="h-12 w-12 ml-auto" 
        />
      </button>
    </div>
  );
};

export default PaymentMercadoPago;
