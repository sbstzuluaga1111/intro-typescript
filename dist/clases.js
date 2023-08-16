"use strict";
class Astronauta {
    constructor(id, nombre, _record, recompensa) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
    }
    obtenerRecompensa(record) {
        if (record == 'ARTEMIS') {
            this.recompensa = 'en hora buena';
            return this.recompensa;
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
const astroPhidolly = new Astronauta(1, 'Phidolly Ojeda', 'Santa Marte', 'NINGUNA');
astroPhidolly.obtenerRecompensa('VENUS');
console.log(`Recompensa : ${astroPhidolly.recompensa}`);
console.log(astroPhidolly.nombre);
astroPhidolly.record = "sincelejo Galaxi";
console.log(`Record via setter de phidoly ${astroPhidolly.record}`);
