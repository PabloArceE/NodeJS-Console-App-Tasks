require('colors');
const Tarea = require("./tarea");


class Tareas{

    constructor(){
        this._listado = {};
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
        
        const newArr = this.listadoArr

        for(let i = 0; i < newArr.length; i++){

            if(newArr[i].completadoEn !== null){
                
                console.log('completo'.green)
            }else{
                console.log('pendiente'.red)
            }
        }        
    }
}

module.exports = Tareas;