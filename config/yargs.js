const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción del To Do'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Identifica si To Do esta Completado o Pendiente'
}
const argv = require('yargs')
    .command('crear', 'Crea un "To Do"', {
        descripcion
    })
    .command('actualizar', 'Actualiza un "To Do"', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un To Do', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}