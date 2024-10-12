const profesores = [
    { id: 1, nombre: 'Martin Olguin', cursos: [1] },
    { id: 2, nombre: 'Jesus Albany', cursos: [2] },
];

function findAll() {
    return profesores;
}

function findById(id) {
    return profesores.find(profesor => profesor.id === id);
}

function agregarCurso(profesorId, cursoId) {
    const profesor = findById(profesorId);
    if (profesor && !profesor.cursos.includes(cursoId)) {
        profesor.cursos.push(cursoId);
        return true;
    }
    return false;
}

function eliminarCurso(profesorId, cursoId) {
    const profesor = findById(profesorId);
    if (profesor) {
        profesor.cursos = profesor.cursos.filter(id => id !== cursoId);
        return true;
    }
    return false;
}

module.exports = {
    findAll,
    findById,
    agregarCurso,
    eliminarCurso
};
