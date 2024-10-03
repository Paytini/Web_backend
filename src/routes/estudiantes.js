const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Consultando todos los registros de estudiantes');
});

router.get('/:id', (req, res) => {
  res.status(200).send('Consultando el registro del estudiante ' + req.params.id);
});

router.post('/', (req, res) => {
  res.status(201).send('Creando un nuevo estudiante');
});

router.put('/:id', (req, res) => {
  res.status(200).send('Modificando el registro del estudiante ' + req.params.id);
});

router.patch('/:id', (req, res) => {
  res.status(200).send('Modificando atributos del estudiante ' + req.params.id);
});

module.exports = router;
