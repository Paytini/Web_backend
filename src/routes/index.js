const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const routesDirectory = path.join(__dirname, './'); // Directorio donde se encuentran las rutas
const routes = {};

// Lee todos los archivos en el directorio de rutas
fs.readdirSync(routesDirectory).forEach(file => {
    // Excluye index.js y solo carga archivos .js
    if (file !== 'index.js' && file.endsWith('.js')) {
        const routeName = file.replace('.js', ''); // Nombre de la ruta sin extensión
        const routePath = path.join(routesDirectory, file); // Ruta del archivo

        // Carga el archivo de ruta y añade el prefijo de ruta
        routes[routeName] = require(routePath);
        
        // Usa el nombre del archivo como prefijo de ruta (ej., '/alumnos' para alumnos.js)
        router.use(`/${routeName}`, routes[routeName]);
    }
});

module.exports = router;
