interface Song{
    id: number
    name: string
    year: number
    albun?: string
}

const amor:Song = {
    id: 1,
    name:'love',
    year: 2000,
    albun: 'amor if live'
}

const confianza:Song = {
    id: 2,
    name:'confianza',
    year: 2000,
    albun: 'amor'
}


console.log(confianza.albun);
console.log(amor.year);