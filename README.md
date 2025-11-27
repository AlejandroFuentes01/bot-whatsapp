# Bot de WhatsApp

Este es un bot simple de WhatsApp que envía N número de mensajes consecutivos a un número específico una vez que se autentica.

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona o descarga este repositorio.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

1. Edita el archivo `bot.js` y cambia la variable `numero` por el número de destino en formato internacional sin el + (por ejemplo, "5219998888888@c.us").
2. También puedes cambiar el mensaje en la línea `await client.sendMessage(numero, `Mensaje ejemplo`);`.
3. Ejecuta `node bot.js` en la terminal.
4. Escanea el código QR que aparece en la consola con la aplicación de WhatsApp en tu teléfono para autenticar.
5. Una vez autenticado, el bot enviará los 50 mensajes automáticamente.

## Notas

- El bot usa Puppeteer en modo headless, por lo que no verás una interfaz gráfica.
- La sesión se guarda localmente, por lo que no necesitarás escanear el QR cada vez (a menos que borres la carpeta `.wwebjs_auth`).
- Asegúrate de que el número de destino sea válido y que puedas enviarle mensajes.
- Este bot es para fines educativos; úsalo responsablemente para evitar bloqueos o violaciones de términos de servicio.

## Dependencias

- whatsapp-web.js
- qrcode-terminal