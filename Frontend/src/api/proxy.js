// api/proxy.js
export default async function handler(req, res) {
    // Manejo de la solicitud preflight (OPTIONS)
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(200).end();
    }
  
    try {
      // Realizamos la petición al endpoint de Google Apps Script
      const googleResponse = await fetch("https://script.google.com/macros/s/AKfycbygeiUR3ujZQNsjiUBeRRoLMrfSeGma0Omg7JAbm5JY8aNWkowzfgLFO2SFt96923o/exec", {
        method: req.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });
      const data = await googleResponse.text();
  
      // Agregamos los headers CORS en la respuesta del proxy
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(googleResponse.status).send(data);
    } catch (error) {
      console.error("Error en el proxy:", error);
      res.status(500).json({ error: "Error en la conexión con el backend" });
    }
  }
  