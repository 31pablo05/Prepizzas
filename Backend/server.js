require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

const app = express();

// Permitir solicitudes CORS (ajusta el origen si lo deseas)
app.use(cors());

// Parsear JSON en el body de las peticiones
app.use(express.json());

// Configurar MercadoPago con el token de acceso desde las variables de entorno
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

app.post('/api/create_preference', async (req, res) => {
  try {
    const { order } = req.body;

    // Validar datos mínimos, incluyendo el email
    if (!order || !order.quantity || !order.delivery || !order.name || !order.phone || !order.date || !order.email) {
      return res.status(400).json({ error: 'Datos de pedido incompletos.' });
    }

    // Validar y convertir el número de teléfono a número
    const phoneNumber = Number(order.phone);
    if (isNaN(phoneNumber)) {
      return res.status(400).json({ error: 'El número de teléfono no es válido.' });
    }

    // Construir el array de items
    const items = [
      {
        title: 'Prepizza',
        quantity: parseInt(order.quantity, 10),
        unit_price: 1500,
        currency_id: 'ARS',
      },
    ];

    if (order.delivery === 'envio') {
      items.push({
        title: 'Costo de envío',
        quantity: 1,
        unit_price: 1000,
        currency_id: 'ARS',
      });
    }

    // Configurar la preferencia de pago
    const preference = {
      items,
      payer: {
        name: order.name,
        email: order.email, // Se incluye el email del comprador
        phone: { number: phoneNumber },
        address: order.address ? { street_name: order.address } : {},
      },
      back_urls: {
        success: "https://prepizzas.vercel.app/success",
        failure: "https://prepizzas.vercel.app//failure",
        pending: "https://prepizzas.vercel.app/pending",
      },
      auto_return: "approved",
      external_reference: phoneNumber.toString(), // Usar el número de teléfono como referencia externa
    };

    const response = await mercadopago.preferences.create(preference);
    console.log('Preferencia creada:', response.body); // Imprime la respuesta completa
    return res.json(response.body);
  } catch (error) {
    console.error('Error al crear la preferencia:', error);
    return res.status(500).json({ error: 'Error al crear la preferencia de pago' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
