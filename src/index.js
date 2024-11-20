require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch(err => console.error('Error al conectar con la base de datos:', err));


app.use(express.json()); // Middleware para JSON

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Bienvenido a PetMedic API!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

const Paciente = require('./models/Paciente');

sequelize.sync({ force: true }) // Cambia "force" a "false" después del primer uso
  .then(() => console.log('Base de datos sincronizada.'))
  .catch(err => console.error('Error al sincronizar:', err));
