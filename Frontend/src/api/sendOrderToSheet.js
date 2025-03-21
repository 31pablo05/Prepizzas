// src/api/sendOrderToSheet.js
export const sendOrderToSheet = async (orderData) => {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbygeiUR3ujZQNsjiUBeRRoLMrfSeGma0Omg7JAbm5JY8aNWkowzfgLFO2SFt96923o/exec", {  // Reemplaza con el URL de tu web app
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      if (data.result === "success") {
        console.log("Pedido guardado en Sheets");
      } else {
        console.error("Error al guardar el pedido", data);
      }
    } catch (error) {
      console.error("Error en la conexión con Sheets:", error);
    }
  };
  