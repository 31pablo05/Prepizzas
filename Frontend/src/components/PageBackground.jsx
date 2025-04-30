// src/components/PageBackground.jsx
import React from 'react';

export default function PageBackground({ children }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/assets/background.webp"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>
      {children}
    </div>
  );
}
