// MODULARIZANDO O CODIGO E DEIXANDO AS FUNÇÕES DE INICIALIZAÇÃO DO SERVIDOR EM UM MODULO SÓ

let express = require('express');
let consign = require('consign');
let app = express(); //executando o express

//o consign procura por todos os arquivos js dentro do  
// diretório app/routes e, para cada um deles, execute o código contido,  
//passando a instância do seu aplicativo Express (app) como um argumento. 
consign().include('app/routes').into(app);  
app.set('view engine', 'ejs') // o mecanismo de engine 

app.set('views', './app/views');//diretório ondos arquivos estão localizados

// especificado qual arquivo ele deve executar porque dentro do config tem o server 
// ele iria ficar executando o servidor toda hora 
// precisa da extensao senao ele pensa que é um subdiretorio  
//Ao passar {cwd:'app'} como um objeto de configuração para consign(), informa ao consign 
//que todos os caminhos subsequentes nos métodos .include() e .then() devem ser relativos 
//ao diretório app/. 
 
consign({cwd:'app'}) // para incluir a pasta app 
    .include('routes') 
    .then('config/dbConnection.js')  // garante que todos os arquivos do routes tenham sido processados 
    .then('models')
    .into(app); 
module.exports = app;
