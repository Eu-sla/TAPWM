//filesystem -> ler e imprimir linhas, precisara incluir o modulo fs (modulko é um elemento de fora)
// vairetornar um obgjto buffer
const fs = require('fs'); // carregando módulo filesystem
const data = fs.readFileSync('file.txt'); // como é sincrono, ele le tudo primeiro e dps ele manda
// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString()); // converte to string pq ele é buffer