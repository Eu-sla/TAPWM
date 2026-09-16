// MODULARIZANDO O CODIGO E DEIXANDO AS FUNÇÕES DE INICIALIZAÇÃO DO SERVIDOR EM UM MODULO SÓ

let express = require('express');
let app = express(); //executando o express
app.set('view engine', 'ejs') // o mecanismo de engine 

app.set('views', './app/views');//diretório ondos arquivos estão localizados
module.exports = app;
