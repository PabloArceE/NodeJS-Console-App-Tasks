require('colors');

const {inquireMenu, pausa} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');






const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquireMenu();
        console.log({opt});
               
        await pausa();
        
    }
    while( opt !== '0')

}

main();