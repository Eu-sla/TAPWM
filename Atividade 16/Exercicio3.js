// esse process.argv é pra pegar os argumentos passados ao chamar o arquivo 
// usando node (nomedosrquivo).js (arg1) (arg2)
let soma = 0;
for (let i=2;i<=process.argv.length-1; i++){ // comeca no 2 porque o elemento 0 é o node e o 1 é o nome do arquivo
    soma+=Number(process.argv[i]);
}
console.log("soma = "+soma);