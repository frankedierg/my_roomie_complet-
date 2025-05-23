const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

app.use(cors());
// Middleware para JSON
app.use(express.json());

// Importar rutas
const testRoutes = require('./routes/testRoutes');

// Rutas
app.use('/api/test', testRoutes);

// Ruta base
app.get('/', (req, res) => {
    res.send('🚀 My Roomie API funcionando correctamente');
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


