const express = require('express');
const swaggerDocs = require('./swagger'); // ✅ this now works
const amqplib = require('amqplib');
const { ServerConfig } = require('./config'); // ✅ must contain a PORT key
const apiRoutes = require('./routes'); // ✅ your routes index file

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes); 

swaggerDocs(app); // 

app.listen(ServerConfig.PORT, () => {
  console.log(`✅ Server running on PORT: ${ServerConfig.PORT}`);
  console.log(`📚Swagger docs available at http://localhost:${ServerConfig.PORT}/docs`);

});
