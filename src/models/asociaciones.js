
const Curso = require('../models/cursodb');
const Alumno = require('../models/estudiantesdb');
const Profesor = require('../models/profesoresdb');

Curso.belongsToMany(Alumno, { through: 'cursoalumnos', foreignKey: 'CursoId', otherKey: 'AlumnoId' });
Curso.belongsToMany(Profesor, { through: 'cursoprofesores', foreignKey: 'CursoId', otherKey: 'ProfesorId' });
Alumno.belongsToMany(Curso, { through: 'cursoalumnos', foreignKey: 'AlumnoId', otherKey: 'CursoId' });
Profesor.belongsToMany(Curso, { through: 'cursoprofesores', foreignKey: 'ProfesorId', otherKey: 'CursoId' });

module.exports = {
    Curso,
    Alumno,
    Profesor
};
