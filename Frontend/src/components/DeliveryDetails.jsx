// src/components/DeliveryDetails.jsx
import React from 'react';

const DeliveryDetails = ({ order, handleChange }) => (
  <>
   

    
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
          placeholder="Calle 123"


          className="mt-1 block w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
    )}
  </>
);

export default DeliveryDetails;
