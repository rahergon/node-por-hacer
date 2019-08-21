const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    demand: true,
    default: true,
    alias: 'c',
    desc: 'parametro para completar la tarea'
}

const argv = require('yargs')
    .command('crear', 'Con el comando crear se agrega una tarea por hacer', {
        descripcion
    })
    .command('listar', 'Con el comando listar se muestran las tareas por hacer')
    .command('actualizar', 'Con el comando actualizar se modifica una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Con el comando borrar elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}