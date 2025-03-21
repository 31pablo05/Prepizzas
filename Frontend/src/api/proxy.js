// api/proxy.js
export default async function handler(req, res) {
    // Manejo de solicitud preflight (OPTIONS)
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
  
      // Leemos la respuesta como texto
      const text = await googleResponse.text();
  
      // Intentamos parsear el texto a JSON
      let data;
      try {
        data = JSON.parse(text);
        // Si se parseó correctamente, enviamos la respuesta en formato JSON
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(googleResponse.status).json(data);
      } catch (parseError) {
        // Si la respuesta no es JSON, la enviamos tal cual
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(googleResponse.status).send(text);
      }
    } catch (error) {
      console.error("Error en el proxy:", error);
      res.setHeader("Access-Control-Allow-Origin", "*");
      return res.status(500).json({ error: "Error en la conexión con el backend" });
    }
  }
  