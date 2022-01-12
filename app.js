require('colors');

const { guardarInfo, leerInfo } = require('./helpers/interaccionBD');
const { inquireMenu,
        pause,
        leerInput,
        listadoTareasBorrar,
        confirm,
        mostrarListadoChecklist
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

                tareas.tareasCompletadas(true);

            break;

            case '4': 
                tareas.tareasCompletadas(false);
            break;

            case '5': 
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas(ids);           
            break;

            case '6': 
                const id = await listadoTareasBorrar( tareas.listadoArr );
                
                if(id !== '0'){
                    
                    const ok = await confirm('Por favor confirme que desea borra la tarea');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada')
                    }
                }

            break;
        }        

        guardarInfo(tareas.listadoArr);
               
        await pause();
        
    }
    while( opt !== '0')

    
}

main();
