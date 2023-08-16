"use strict";
1; //
/* class Centro{
    constructor(
        public id: number,
        public nombre: string,
        public direccion: string,
        public telefono: number,
        public personas: number
        )
        {}

} */
class Ruta {
    constructor(id, nombre, enfoque, nivel, chek) {
        this.id = id;
        this.nombre = nombre;
        this.enfoque = enfoque;
        this.nivel = nivel;
        this.chek = chek;
    }
    finalLevel(chek) {
        if (chek == 'APROBADO') {
            this.nivel = 'El camper completo su ruta';
            return this.nivel;
        }
    }
    set ruta(chek) {
        this.chek = chek;
    }
    get ruta() {
        return this.chek;
    }
}
const rutaAprendizaje = new Ruta(1, 'Phidolly Ojeda', 'Santa Marte', 'NINGUNA', 'No APROBO');
rutaAprendizaje.finalLevel('VENUS');
console.log(`Recompensa : ${rutaAprendizaje.nivel}`);
console.log(rutaAprendizaje.chek);
rutaAprendizaje.ruta = "sincelejo Galaxi";
console.log(`Record via setter de phidoly ${rutaAprendizaje.ruta}`);
/* class Nivel{
    constructor(
        public id: number,
        public nombre: string,
        public dificultad: string,
        public trainer: string,
        public campers: number
        )
        {}

}

class Camper{
    constructor(
        public id: number,
        public nombre: string,
        public edad: number,
        public especialidad: string,
        public contrato: string
        )
        {}

}

class Contrato{
    constructor(
        public id: number,
        public aprobacion: string,
        public fecha: string,
        public hora: string,
        public duracion: string,
        )
        {}
} */ 
