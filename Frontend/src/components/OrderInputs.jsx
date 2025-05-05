// src/components/OrderInputs.jsx
import React from 'react';

const OrderInputs = ({ order, handleChange, totalPrice }) => (
  <>
    <div>
      <label className="block text-lg font-medium text-black-700">Nombre, Apellido</label>
      <input
        type="text"
        name="name"
        value={order.name}
        onChange={handleChange}
        required
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-lg font-medium text-black-700">Email</label>
      <input
        type="email"
        name="email"
        value={order.email}
        onChange={handleChange}
        required
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-lg font-medium text-black-700">Celular </label>
      <input
        type="text"
        name="phone"
        value={order.phone}
        onChange={handleChange}
        required
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-lg font-medium text-black-700">Cantidad de Prepizzas</label>
      <input
        type="number"
        name="quantity"
        value={order.quantity}
        onChange={handleChange}
        min="1"
        required
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-1 text-md text-black-600">
        Precio total: ${totalPrice.toLocaleString()}
      </p>
    </div>

    <div>
      <label className="block text-lg font-medium text-black-700">Fecha de entrega/recogida</label>
      <input
        type="date"
        name="date"
        value={order.date}
        onChange={handleChange}
        required
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-lg font-medium text-black-700">Tipo de entrega</label>
      <select
        name="delivery"
        value={order.delivery}
        onChange={handleChange}
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="recoger">Recoger</option>
        <option value="envio">Envío</option>
      </select>
    </div>
  </>
);

export default OrderInputs;
