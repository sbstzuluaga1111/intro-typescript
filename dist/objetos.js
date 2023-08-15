"use strict";
//object (array)
let goleadores = ['joel', 'phidoli', 'akio'];
let goles = [0, -1, 6];
console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goles}`);
let corners = [];
//Metodo alternativo para definir arrays en TypeScript
let penalties = [true];
console.log(`joel desperdicio 2 penaltis: ${penalties}`);
console.log(goles.map(ele => ele.toString()));
let goleadoresid = [7, 10, 17, 11];
goleadoresid.push(+'1');
console.log(goleadoresid);
const songs = {
    id: 1,
    name: 'Exceeding Joy',
};
console.log(songs);
const singer = {
    id: 1,
    name: 'joel'
};
singer.id = 2;
console.log(singer.id);
