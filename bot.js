const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(), // guarda sesión para no escanear QR cada vez
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  }
});

// Mostrar QR en consola
client.on("qr", qr => {
  console.log("Escanea el QR para iniciar sesión:");
  qrcode.generate(qr, { small: true });
});

// Cuando ya está listo y logeado
client.on("ready", () => {
  console.log("Enchufado");

  const numero = "5213121682493@c.us"; // Cambiar por el número destino

  const enviarMuchos = async () => {
    for (let i = 1; i <= 300; i++) {
      await client.sendMessage(numero, `Hola te amo ❤️`); // Mensaje a enviar
      console.log(`Enviado: ${i}`);

      // Pausa para evitar ser bloqueado
      await new Promise(res => setTimeout(res, 300));
    }

    console.log("✔ Se enviaron los 300 mensajes");
  };

  enviarMuchos();
});

client.initialize();
