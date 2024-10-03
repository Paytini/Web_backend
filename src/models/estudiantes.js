// estudiantes.js

const estudiantes = [
    {
      id: 1,
      matricula: '12345',
      nombre: 'Jonathan Granados',
      semestreIngreso: '2024-1',
      creditos: 120
    },
    {
      id: 2,
      matricula: '123456',
      nombre: 'Kevin Hijo',
      semestreIngreso: '2019-1',
      creditos: 120
    },
    {
      id: 3,
      matricula: '1234567',
      nombre: 'Juan Rodriguez',
      semestreIngreso: '2020-1',
      creditos: 100
    },
    {
      id: 4,
      matricula: '12345678',
      nombre: 'Bryan Juarez',
      semestreIngreso: '2020-1',
      creditos: 100
    },
    {
      id: 5,
      matricula: '123456789',
      nombre: 'Pedro Martínez',
      semestreIngreso: '2021-1',
      creditos: 80
    }
  ];
  
  function findAll() {
    return estudiantes;
  }
  
  function findById(id) {
    return estudiantes.find(estudiante => estudiante.id === id);
  }
  
  function findByMatricula(matricula) { // aqui lo busca por matricula
    return estudiantes.find(estudiante => estudiante.matricula === matricula);
  }

function add(estudiante) {
    estudiantes.push(estudiante);
}

function save(id, data) {
    const index = estudiantes.findIndex(estudiante => estudiante.id === id);
    if (index !== -1) {
        estudiantes[index] = { ...estudiantes[index], ...data };
        return true;
    }
    return false;
}

function deleteById(id) {
  const index = estudiantes.findIndex(estudiante => estudiante.id === id);
  if (index !== -1) {
      estudiantes.splice(index, 1);
      return true;
  }
  return false; 
}

  
  module.exports = {
    findAll,
    findById,
    findByMatricula,
    add,   
    save,
    deleteById
  };