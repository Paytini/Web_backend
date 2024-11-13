const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');
const sequelize = require('../src/config/db');
const {Curso, Alumno, Profesor} = require('../src/models/asociaciones');
const rutas = require('../src/routes/index');
const options = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', rutas);

https.createServer(options, app).listen(3000, () => {
    console.log('Servidor corriendo en https://localhost:3000');
});

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('Tablas sincronizadas con éxito.');
//     })
//     .catch(err => {
//         console.error('Error al sincronizar tablas:', err);
//     });



