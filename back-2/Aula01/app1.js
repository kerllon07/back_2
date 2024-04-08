console.log("nomes");

//para importar os nomes que estão no arquivo dados.js

let{nomes, frutas, Soma} = require('./dados');

console.log(nomes);
console.log(frutas);

console.log(Soma(13, 7));