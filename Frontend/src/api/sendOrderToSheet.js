// src/api/sendOrderToSheet.js
export const sendOrderToSheet = async (orderData) => {
  try {
    const response = await fetch("https://prepizzas.vercel.app/api/proxy", {
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
