const express = require('express');
const path = require('path');
const sequelize = require('../src/config/db');
const {Curso, Alumno, Profesor} = require('../src/models/asociaciones');
const rutas = require('../src/routes/index');

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('Tablas sincronizadas con éxito.');
//     })
//     .catch(err => {
//         console.error('Error al sincronizar tablas:', err);
//     });

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', rutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


