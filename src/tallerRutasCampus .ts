1//

class Centro{
    constructor(
        public id: number,
        public nombre: string,
        public direccion: string,
        public telefono: number,
        public personas: number
        )
        {}

}

class Ruta{
    constructor(
        public id: number,
        public nombre: string,
        public enfoque: string,
        public nivel: string,
        public chek: string
        )
        {}

        finalLevel(chek: string){
            if(chek=='APROBADO'){
                this.nivel = 'El camper completo su ruta'
                return this.nivel
            }
        }

        set ruta(chek: string){
            this.chek = chek;
        }

        get ruta(): string{
            return this.chek;
        }


}

const rutaAprendizaje = new Ruta(1,'Phidolly Ojeda','Santa Marte','NINGUNA','No APROBO');
rutaAprendizaje.finalLevel('ANULADO')
console.log(`Resultados : ${rutaAprendizaje.nivel}`);
console.log(rutaAprendizaje.chek);

class Nivel{
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
}