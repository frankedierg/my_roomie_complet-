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

const roomRoutes = require('./routes/roomRoutes');
app.use('/api/rooms', roomRoutes);


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const uploadRoutes = require('./routes/uploadRoutes');
const path = require('path');

// Permitir acceso a carpeta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta de subida
app.use('/api/upload', uploadRoutes);


