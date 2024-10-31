// consultas.js

const { Curso, Alumno, Profesor } = require('../src/models/asociaciones');
const sequelize = require('../src/config/db');

// Función principal para ejecutar consultas
async function main() {
    try {
        await sequelize.sync({ force: false });
        
        const curso1 = await Curso.create({ nombre: 'Matemáticas' });
        const curso2 = await Curso.create({ nombre: 'Física' });

        const alumno1 = await Alumno.create({ nombre: 'Juan Perez', matricula: 'A001' });
        const alumno2 = await Alumno.create({ nombre: 'Ana López', matricula: 'A002' });

        const profesor1 = await Profesor.create({ nombre: 'Prof. García' });
        const profesor2 = await Profesor.create({ nombre: 'Prof. Martínez' });

        // Asociar alumnos a cursos (muchos a muchos)
        await curso1.addAlumno(alumno1);
        await curso1.addAlumno(alumno2);
        await curso2.addAlumno(alumno1);

        // Asociar profesores a cursos (muchos a muchos)
        await curso1.addProfesor(profesor1);
        await curso2.addProfesor(profesor2);

        // Consultar cursos de un alumno
        const cursosDeAlumno1 = await alumno1.getCursos();
        console.log(`Cursos de ${alumno1.nombre}:`, cursosDeAlumno1.map(c => c.nombre));

        // Consultar alumnos de un curso
        const alumnosDeCurso1 = await curso1.getAlumnos();
        console.log(`Alumnos en el curso ${curso1.nombre}:`, alumnosDeCurso1.map(a => a.nombre));

        // Consultar cursos de un profesor
        const cursosDeProfesor1 = await profesor1.getCursos();
        console.log(`Cursos del profesor ${profesor1.nombre}:`, cursosDeProfesor1.map(c => c.nombre));

    } catch (error) {
        console.error("Error en las consultas:", error);
    } finally {
        await sequelize.close();
    }
}

main();
