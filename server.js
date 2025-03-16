const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (socket) => {
    console.log("✅ Un client s-a conectat!");
    
    socket.on("message", (message) => {
        console.log(`📩 Mesaj primit: ${message}`);
        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on("close", () => {
        console.log("❌ Un client s-a deconectat");
    });
});

console.log("🚀 Server WebSocket pornit pe port 3000");
