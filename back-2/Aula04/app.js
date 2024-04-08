//criar arquivos em nosso projeto
const fs = require('fs');

//criar um arquivo de log sincrono

let log = "mensagem de log\n";

//fs.writeFileSync('./logs.log',log);

fs.writeFileSync('./logs.log',log);

//criar arquivo de forma assincrona

fs.writeFile("./logs2.log",log,{flag:'a+'},(erro)=>{
    
    if(erro){
    
        console.log(erro)
    }

})

console.log("Fim");

//para excuir arquivos


fs.unlinkSync('./logs2.log');

console.log("Removido arquivo");



fs.unlinkSync('./logs.log');

console.log("Removido arquivo com unlinkSynk ");
