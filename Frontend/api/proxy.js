import { buffer } from 'micro';

export default async function handler(req, res) {
  // Headers CORS para todas las respuestas
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Preflight
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // Leer el body manualmente
    const rawBody = await buffer(req);
    const parsedBody = JSON.parse(rawBody.toString());

    const response = await fetch("https://script.google.com/macros/s/AKfycbygeiUR3ujZQNsjiUBeRRoLMrfSeGma0Omg7JAbm5JY8aNWkowzfgLFO2SFt96923o/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedBody),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor", details: error.message });
  }
}

// ⚙️ Config para que Vercel no aplique su bodyParser por defecto
export const config = {
  api: {
    bodyParser: false,
  },
};
