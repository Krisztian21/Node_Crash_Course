const objektum = require('./data');

const szam = 12;

function feldolgoz() {
    console.log('Itt vagyunk a 14 Szoftverfejlesztő csoportban.');
}

function kiir() {
    console.log(`A könyv szerzője: ${objektum.konyv.author}. A könyv címe: ${objektum.konyv.title}.`);
}

class Figura {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`A nevem: ${this.name}, korom: ${this.age}`);
    }
}

module.exports = { szam, feldolgoz, kiir, Figura }