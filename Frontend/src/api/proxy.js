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
      // Realiza la petición al endpoint de Google Apps Script
      const googleResponse = await fetch("https://script.google.com/macros/s/AKfycbxjT1Jndwhdap16l9nCKikVjOaCOWSAWXPx6MOGcFWysc-YcYj-Psmp7hOjB5mj/exec", {
        method: req.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });
  
      // Lee la respuesta como texto
      const text = await googleResponse.text();
  
      // Intenta parsear el texto a JSON
      let data;
      try {
        data = JSON.parse(text);
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(googleResponse.status).json(data);
      } catch (parseError) {
        // Si la respuesta no es JSON, la envía tal cual
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(googleResponse.status).send(text);
      }
    } catch (error) {
      console.error("Error en el proxy:", error);
      res.setHeader("Access-Control-Allow-Origin", "*");
      return res.status(500).json({ error: "Error en la conexión con el backend" });
    }
  }
  