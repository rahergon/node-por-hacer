const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`./db/data.json`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('tarea creada')
            }
        });

    })
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB()
        .then((tarea) => {
            console.log(tarea);
        })
        .catch((e) => {
            console.log(e);
        });
    return porHacer;
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }


    //console.log(listadoPorHacer);
}
const getListado = () => {
    let listado = [];
    try {
        listado = require('../db/data.json');
    } catch (e) {
        listado = [];
    }
    return listado;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
    /*
    let borrado = false;
    let listadoPorHacer2 = [];
    listadoPorHacer.findIndex((tarea) => {
        if (tarea.descripcion !== descripcion) {
            listadoPorHacer2.push(tarea);
        } else {
            borrado = true;
        }
    })
    if (borrado) {
        listadoPorHacer = listadoPorHacer2;
        guardarDB();
    }

    return borrado;
    */

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}