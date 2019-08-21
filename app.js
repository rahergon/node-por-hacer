//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

const colores = require('colors');

//console.log(argv);

const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear una nota por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);

        break;
    case 'listar':
        console.log('Listar las notas por hacer');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========== por hacer =========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado:${tarea.completado}`);
            console.log('==============================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una nota por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borra una nota por hacer');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}




//console.log(argv);