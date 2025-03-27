// src/components/Contact.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import PaymentMercadoPago from './PaymentMercadoPago';

const Contact = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-md mt-8">
      {/* Botón de MercadoPago */}
      <div className="flex justify-center mb-4">
        <PaymentMercadoPago />
      </div>

      {/* Información de contacto */}
      <div className="space-y-4 mb-6 text-left">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-green-500 text-xl" />
          <div>
            <p className="text-sm font-semibold text-gray-600">Dirección</p>
            <p className="text-lg font-medium text-gray-800">Brown 311</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-green-500 text-xl" />
          <div>
            <p className="text-sm font-semibold text-gray-600">Celular</p>
            <p className="text-lg font-medium text-gray-800">2804 38 9134</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-green-500 text-xl" />
          <div>
            <p className="text-sm font-semibold text-gray-600">Correo</p>
            <p className="text-lg font-medium text-gray-800">pabloproboste64@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-2xl">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-2xl">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-2xl">
          <FaLinkedinIn />
        </a>
      </div>

      <p className="text-center text-xs text-gray-500">
        Desarrollado por Pablo Proboste
      </p>
    </div>
  );
};

export default Contact;
