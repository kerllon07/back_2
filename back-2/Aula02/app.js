//ler arquivos externos usando node
//vamos usar a lib fs (File System)

const fs = require('fs');

/*fs.readFile('./dados.csv', (erro, data)=>{

    if(erro){
        console.log(erro);
    }
    else
    {
        console.log(data.toString());
    }


});


console.log("Segunda Operação")
*/

//usando o método síncrono

/*let dados = fs.readFileSync('./dados.csv');
console.log(dados.toString());
console.log("Segunda Operação");
*/

//Para tratar possiveis erros

let dados = "";

if(fs.existsSync('../Aula02/dados.csv')){
    dados = fs.readFileSync('../Aula02/dados.csv');
    console.log(dados.toString());
}
else
{
    console.log("Arquivo não encontrado");
}

console.log("Fim");

