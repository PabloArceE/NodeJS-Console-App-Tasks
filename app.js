require('colors');

const { inquireMenu,
        pause,
        leerInput
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');






const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquireMenu();
        
        switch( opt ){

            case '1': 

                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc); 

            break;

            case '2': 

                console.log(tareas._listado);

            break;

            case '3': 

            break;

            case '4': 

            break;

            case '5': 

            break;

            case '6': 

            break;

            case '7': 

            break;

        }
               
        await pause();
        
    }
    while( opt !== '0')

}

main();