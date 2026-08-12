//para rodar usar npm install prompt-sync no cmd

//usar assincrono (ver o exercicio4)
const prompt = require('prompt-sync')();
// parenteses indicam que estamos executando uma função prompt-sync assim ele retorna um valor que é uma nova função que  
// pode ser usada para criar prompts
function saudacao(nome){
    console.log('OI ' + nome);
}
function entradaNome(callback){ // callback serve pra passar argumentos entre funções
    let nome = prompt('Digite seu nome:');
    callback(nome); // chamando a função callback (saudação)
}
entradaNome(saudacao);
// obter o nome de usuário através de uma caixa de dialçogo e em seguida chamar a funcao de retorno(callback) 
// fornecida como parametro passando o nome digitado como argumento