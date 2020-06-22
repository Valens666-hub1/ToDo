const argv = require('./config/yargs').argv;
//const argv = require('yargs').argv;
//const colors = require('colors');

const toDo = require('./TO-DO/to-do');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear un "To Do"');
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'listar':
        //console.log('Listar Todo los "To Do"');
        let listado = toDo.getListado();
        for (let tarea of listado) {
            console.log('======= Por Hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        //console.log('Actualizar un "To Do"');
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        //console.log('Actualizar un "To Do"');
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando No Reconocido');
}

