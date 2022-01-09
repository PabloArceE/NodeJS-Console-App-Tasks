const inquirer = require('inquirer');
require('colors');

const questions = {

    type: 'list',
    name: 'options',
    message: 'What do you want to do?',
    choices:[
        {
            name: '1. Crear tarea',
            value: '1'
            
        },
        {
            name: '2. Lista de tareas',
            value: '2'
            
        },
        {
            name: '3. Listar tareas completadas',
            value: '3'
            
        },
        {
            name: '4. Listar tareas pendientes',
            value: '4'
            
        },
        {
            name: '5. Completar tareas',
            value: '5'
            
        },
        {
            name: '6. Borrar tareas',
            value: '6'
            
        },
        {
            name: '0. Salir',
            value: '0'
            
        }        
    ]
}

const inquireMenu = async() => {

    // console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción  '.blue);
    console.log('=========================\n'.green);

    const {options} = await inquirer.prompt([questions]);

    return options;
}

const pausa = async() => {

    const question = {
        
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.blue} para continuar\n`
    }

    console.log('\n');

    await inquirer.prompt([question]);

} 


module.exports = {
    inquireMenu,
    pausa
}