const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
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
client.on("ready", async () => {
  console.log("Enchufado");

  const numero = "5219998888888@c.us"; // Cambiar por el número destino
  const media = await MessageMedia.fromUrl(
    "https://i.pinimg.com/736x/b9/85/c1/b985c11add8b6321b674ae7d2fafa3de.jpg" // Cambiar por la imagen a enviar
  )

  const enviarMuchos = async () => {
    for (let i = 1; i <= 300; i++) {
      await client.sendMessage(numero, media, { caption: `Mensaje ejemplo` }); // Mensaje a enviar
      console.log(`Enviado: ${i}`);

      // Pausa para evitar ser bloqueado
      await new Promise(res => setTimeout(res, 300));
    }

    console.log("✔ Se enviaron los 300 mensajes");
  };

  enviarMuchos();
});

client.initialize();
