// src/components/OrderInputs.jsx
import React from 'react';
import { motion } from 'framer-motion';

const fadeSlideUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const OrderInputs = ({ order, handleChange, totalPrice }) => (
  <>
    <motion.div variants={fadeSlideUp} initial="hidden" animate="visible" className="mb-4">
      <label className="block text-lg font-medium text-black-700">Nombre, Apellido</label>
      <input
        type="text"
        name="name"
        value={order.name}
        onChange={handleChange}
        required
        placeholder="Ej: Juan Pérez"
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </motion.div>

    <motion.div variants={fadeSlideUp} initial="hidden" animate="visible" className="mb-4">
      <label className="block text-lg font-medium text-black-700">Email</label>
      <input
        type="email"
        name="email"
        value={order.email}
        onChange={handleChange}
        required
        placeholder="Ej: juan@example.com"
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </motion.div>

    <motion.div variants={fadeSlideUp} initial="hidden" animate="visible" className="mb-4">
      <label className="block text-lg font-medium text-black-700">Celular</label>
      <input
        type="text"
        name="phone"
        value={order.phone}
        onChange={handleChange}
        required
        placeholder="Ej: 2804123456"
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </motion.div>

    <motion.div variants={fadeSlideUp} initial="hidden" animate="visible" className="mb-4">
      <label className="block text-lg font-medium text-black-700">Cantidad de Prepizzas</label>
      <input
        type="number"
        name="quantity"
        value={order.quantity}
        onChange={handleChange}
        min="1"
        required
        placeholder="Ej: 3"
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-3 text-xl font-bold text-black-700">
        Precio total: ${totalPrice.toLocaleString()}
      </p>
    </motion.div>

    <motion.div variants={fadeSlideUp} initial="hidden" animate="visible" className="mb-4">
      <label className="block text-lg font-medium text-black-700">Fecha de entrega/recogida</label>
      <input
        type="date"
        name="date"
        value={order.date}
        onChange={handleChange}
        required
        placeholder="Selecciona una fecha"
        className="mt-1 block w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </motion.div>

    <motion.div variants={fadeSlideUp} initial="hidden" animate="visible" className="mb-4">
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
    </motion.div>
  </>
);

export default OrderInputs;
