//criar pastas
const fs = require('fs');

//com metodo sincrono

//fs.mkdirSync('logs');

//com metodo assincrono

fs.mkdir('./logs2',(erro)=>{
    if(erro){
        console.log("Erro!!");
    }

})


//para deletar as pastas

if(fs.existsSync('./logs2')){
    
    fs.rmdirSync('./logs2');
}

console.log("Fim da execução");