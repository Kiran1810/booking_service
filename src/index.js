const express = require('express');
const swaggerDocs = require('./swagger'); // ✅ this now works
const amqplib = require('amqplib');
const { ServerConfig } = require('./config'); // ✅ must contain a PORT key
const apiRoutes = require('./routes'); // ✅ your routes index file

const app = express();

async function connectQueue() {
  try {
    const connection = await amqplib.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue('notification-service');
    console.log("✅ Connected to RabbitMQ queue");
  } catch (error) {
    console.error("❌ Failed to connect to RabbitMQ:", error);
  }
}

connectQueue(); // initialize RabbitMQ

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes); 

swaggerDocs(app); // 

app.listen(ServerConfig.PORT, () => {
  console.log(`✅ Server running on PORT: ${ServerConfig.PORT}`);
  console.log(`📚Swagger docs available at http://localhost:${ServerConfig.PORT}/docs`);
});
