require('colors');
const Tarea = require("./tarea");


class Tareas{

    constructor(){
        this._listado = {};
    }

    borrarTarea( id ){

        if(this._listado[id]){
            delete this._listado[id];
        }

    }

    get listadoArr(){
        const newArr = [];

        Object.keys(this._listado).forEach( key => {
            newArr.push(this._listado[key]);
        })
        return newArr;
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromDB( arrTareas ){
        arrTareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto(){
        
        console.log()

        this.listadoArr.forEach((tarea, i) => {
            
            const idx = `${i + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;

            console.log(`${idx}. ${desc} | ${estado}`);

        })
    }

    tareasCompletadas(completadas = true){

        console.log()

        let count = 1;

        this.listadoArr.forEach((tarea) => {
            
            const {desc, completadoEn} = tarea;
            const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;

            if(completadas){
                if(completadoEn){
                    console.log(`${count.toString().green}. ${desc} | ${completadoEn.toString().green}`)
                    count += 1;                       
                }
            }else{
                if(!completadoEn){
                    console.log(`${count.toString().green}. ${desc} | ${estado}`)
                    count += 1;
                }
            }
         })    
    }
}

module.exports = Tareas;