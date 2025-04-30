// src/components/SubmitButton.jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

export default function SubmitButton({ isLoading, paymentMethod }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full py-3 px-6 text-xl font-bold rounded-lg mt-4 transition-colors ${
        isLoading 
          ? 'bg-gray-400 cursor-not-allowed flex items-center justify-center' 
          : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin mr-2" size={20} />
          Enviando pedido…
        </>
      ) : paymentMethod === 'mercadopago' ? (
        'Procesar Pago'
      ) : (
        'Enviar Pedido'
      )}
    </button>
  );
}
