// src/components/PaymentOptions.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const PaymentOptions = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-6"
    >
      <h3 className="text-lg font-semibold mb-2 text-black-800">
        Eligi tu método de pago:
      </h3>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
        {[
          { key: 'efectivo', label: 'Pagar en efectivo' },
          { key: 'transferencia', label: 'Pagar por Transferencia' },
        ].map(({ key, label }) => (
          <motion.button
            key={key}
            type="button"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            animate={
              paymentMethod === key
                ? { scale: [1, 1.05, 1], boxShadow: '0 0 0.5rem #3b82f6' }
                : {}
            }
            onClick={() => setPaymentMethod(key)}
            className={`py-2 px-4 rounded w-full sm:w-auto transition-colors duration-300 ${
              paymentMethod === key
                ? 'bg-blue-700 text-white border-2 border-blue-900'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {label}
          </motion.button>
        ))}

        {/* MercadoPago Button */}
        <motion.button
          type="button"
          onClick={() => setPaymentMethod('mercadopago')}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          animate={
            paymentMethod === 'mercadopago'
              ? { scale: [1, 1.05, 1], boxShadow: '0 0 0.5rem #facc15' }
              : {}
          }
          className={`py-2 px-4 rounded w-full sm:w-auto flex items-center justify-center gap-2 transition-colors duration-300 ${
            paymentMethod === 'mercadopago'
              ? 'bg-yellow-700 text-white border-2 border-yellow-900'
              : 'bg-yellow-500 text-white hover:bg-yellow-600'
          }`}
          title="Pago con tarjeta: se redirigirá a MercadoPago"
        >
          <img
            src="/assets/ico/mercadopago2.webp"
            alt="MercadoPago"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <span className="text-sm sm:text-base font-medium">
            Pagar con Tarjeta de crédito
          </span>
          <img
            src="/assets/ico/tarjeta-de-debito.webp"
            alt="Tarjetas"
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
        </motion.button>
      </div>

      {paymentMethod && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 p-4 rounded-md shadow bg-blue-100 border border-blue-300"
        >
          <p className="text-lg text-blue-900 font-semibold">
            Has seleccionado:{' '}
            <span className="font-bold capitalize">{paymentMethod}</span>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PaymentOptions;
