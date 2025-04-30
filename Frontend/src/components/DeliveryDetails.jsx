// src/components/DeliveryDetails.jsx
import React from 'react';

const DeliveryDetails = ({ order, handleChange }) => (
  <>
    {/* Fecha */}
    <div>
      <label className="block text-lg font-medium">Fecha de entrega/recogida</label>
      <input
        type="date"
        name="date"
        value={order.date}
        onChange={handleChange}
        required
        className="mt-1 block w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Tipo de entrega */}
    <div>
      <label className="block text-lg font-medium">Tipo de entrega</label>
      <select
        name="delivery"
        value={order.delivery}
        onChange={handleChange}
        className="mt-1 block w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
      >
        <option value="recoger">Recoger en local</option>
        <option value="envio">Envío a domicilio (+$1000)</option>
      </select>
    </div>

    {/* Dirección sólo si es envío */}
    {order.delivery === 'envio' && (
      <div>
        <label className="block text-lg font-medium">Dirección</label>
        <input
          type="text"
          name="address"
          value={order.address}
          onChange={handleChange}
          required
          className="mt-1 block w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
    )}
  </>
);

export default DeliveryDetails;
