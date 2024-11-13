const { Curso, Alumno, Profesor } = require('../src/models/asociaciones');
const sequelize = require('../src/config/db');

async function main() {
    try {
        await sequelize.sync({ force: true }); 

        const curso1 = await Curso.create({ nombre: 'Matemáticas' });
        const curso2 = await Curso.create({ nombre: 'Física' });
        const curso3 = await Curso.create({ nombre: 'Química' });
        const curso4 = await Curso.create({ nombre: 'Historia' });
        const curso5 = await Curso.create({ nombre: 'Literatura' });

        const alumno1 = await Alumno.create({ nombre: 'Juan Perez', matricula: 'A001' });
        const alumno2 = await Alumno.create({ nombre: 'Ana López', matricula: 'A002' });
        const alumno3 = await Alumno.create({ nombre: 'Carlos Ramírez', matricula: 'A003' });
        const alumno4 = await Alumno.create({ nombre: 'María González', matricula: 'A004' });
        const alumno5 = await Alumno.create({ nombre: 'Luis Morales', matricula: 'A005' });
        const alumno6 = await Alumno.create({ nombre: 'Patricia Sánchez', matricula: 'A006' });
        const alumno7 = await Alumno.create({ nombre: 'José Hernández', matricula: 'A007' });
        const alumno8 = await Alumno.create({ nombre: 'José Lopez', matricula: 'A008' });


        const profesor1 = await Profesor.create({ nombre: 'Prof. García' });
        const profesor2 = await Profesor.create({ nombre: 'Prof. Martínez' });
        const profesor3 = await Profesor.create({ nombre: 'Prof. Suárez' });
        const profesor4 = await Profesor.create({ nombre: 'Prof. Fernández' });
        const profesor5 = await Profesor.create({ nombre: 'Prof. Castro' });

        await curso1.addAlumno(alumno1);
        await curso1.addAlumno(alumno2);
        await curso1.addAlumno(alumno3);
        await curso2.addAlumno(alumno1);
        await curso2.addAlumno(alumno4);
        await curso3.addAlumno(alumno5);
        await curso3.addAlumno(alumno6);
        await curso4.addAlumno(alumno2);
        await curso4.addAlumno(alumno7);
        await curso5.addAlumno(alumno3);
        await curso5.addAlumno(alumno4);
        await curso5.addAlumno(alumno5);
        await curso5.addAlumno(alumno8);

        await curso1.addProfesor(profesor1);
        await curso1.addProfesor(profesor2);
        await curso2.addProfesor(profesor3);
        await curso3.addProfesor(profesor1);
        await curso3.addProfesor(profesor4);
        await curso4.addProfesor(profesor5);
        await curso5.addProfesor(profesor2);


        const cursosDeAlumno1 = await alumno1.getCursos();
        console.log(`Cursos de ${alumno1.nombre}:`, cursosDeAlumno1.map(c => c.nombre));

 
        const alumnosDeCurso1 = await curso1.getAlumnos();
        console.log(`Alumnos en el curso ${curso1.nombre}:`, alumnosDeCurso1.map(a => a.nombre));


        const cursosDeProfesor1 = await profesor1.getCursos();
        console.log(`Cursos del profesor ${profesor1.nombre}:`, cursosDeProfesor1.map(c => c.nombre));


        for (const curso of cursosDeProfesor1) {
            const alumnos = await curso.getAlumnos();
            console.log(`Alumnos en ${curso.nombre} impartido por ${profesor1.nombre}:`, alumnos.map(a => a.nombre));
        }

    } catch (error) {
        console.error("Error en las consultas:", error);
    } finally {
        await sequelize.close();
    }
}

main();
