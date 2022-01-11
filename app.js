require('colors');

const { guardarInfo, leerInfo } = require('./helpers/interaccionBD');
const { inquireMenu,
        pause,
        leerInput
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasFromDB = leerInfo();

    if(tareasFromDB){
        tareas.cargarTareasFromDB(tareasFromDB);
    }

   
    do{
        opt = await inquireMenu();
        
        switch( opt ){

            case '1': 

                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc); 

            break;

            case '2': 

                tareas.listadoCompleto();

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

        guardarInfo(tareas.listadoArr);
               
        await pause();
        
    }
    while( opt !== '0')

}

main();