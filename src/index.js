const express = require('express');
const app = express();
const { findAll, findById, findByMatricula, add, save,deleteById } = require('../src/models/estudiantes');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Acceder al API en /estudiantes');
});

app.get('/estudiantes', (req, res) => {
    const estudiantes = findAll();
    res.status(200).json(estudiantes);
});

app.get('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = findById(id);
    
    if (!estudiante) {
        return res.status(404).send('Estudiante no encontrado');
    }

    res.status(200).json(estudiante);
});

app.get('/estudiantes/matricula/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    const estudiante = findByMatricula(matricula);

    if (!estudiante) {
        return res.status(404).send('Estudiante no encontrado');
    }

    res.status(200).json(estudiante);
});

app.post('/estudiantes', (req, res) => {
    const nuevoEstudiante = req.body;

    if (!nuevoEstudiante.id || !nuevoEstudiante.matricula || !nuevoEstudiante.nombre) {
        return res.status(400).send('Datos incompletos. Se requiere id, matrícula y nombre');
    }

    add(nuevoEstudiante);
    res.status(201).send('Estudiante creado exitosamente');
});

app.put('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const datosActualizados = req.body;

    if (!findById(id)) {
        return res.status(404).send('Estudiante no encontrado');
    }

    if (save(id, datosActualizados)) {
        res.status(200).send('Estudiante modificado exitosamente');
    } else {
        res.status(400).send('No se pudo modificar el estudiante');
    }
});

app.patch('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const datosParciales = req.body;

    if (!findById(id)) {
        return res.status(404).send('Estudiante no encontrado');
    }

    if (save(id, datosParciales)) {
        res.status(200).send('Estudiante actualizado exitosamente');
    } else {
        res.status(400).send('No se pudo modificar el estudiante');
    }
});

app.delete('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const estudiante = findById(id);
    if (!estudiante) {
        return res.status(404).send(`Estudiante no encontrado con ID ${id}`);
    }

    const eliminado = deleteById(id);
    if (eliminado) {
        res.status(200).send(`Estudiante con ID ${id} eliminado exitosamente`);
    } else {
        res.status(500).send('Error al intentar eliminar el estudiante');
    }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
