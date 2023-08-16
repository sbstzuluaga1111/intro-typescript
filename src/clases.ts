class Astronauta{
    constructor(
        public id: number,
        public nombre: string,
        private _record: string,
        public recompensa: string 
        )
        {}

        obtenerRecompensa(record: string){
            if(record=='ARTEMIS'){
                this.recompensa = 'en hora buena'
                return this.recompensa
            }
        }

        set record(record: string){
            this._record = record;
        }

        get record(): string{
            return this._record;
        }

}

const astroPhidolly = new Astronauta(1,'Phidolly Ojeda','Santa Marte','NINGUNA');
astroPhidolly.obtenerRecompensa('VENUS')
console.log(`Recompensa : ${astroPhidolly.recompensa}`);
console.log(astroPhidolly.nombre);

astroPhidolly.record= "sincelejo Galaxi"
console.log(`Record via setter de phidoly ${astroPhidolly.record}`);
