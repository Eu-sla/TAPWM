// no final ficou só os requires de server e do modulo1 e os app.listen pra mostrar se o server foi carregado ou não

let app = require('./app/config/server'); 
//carregando o módulo do servidor


let texto = require('./modulo1');
// não precisa colocar modulo1.js ele já entende que é js
// linha de cima importa o modulo1 do arquivo modulo1, require serve pra importar modulos

//definindo as rotas
let rotaHome = require('./app/routes/home');
rotaHome(app); // está executando
let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app); 
let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app); 
let rotaCursos = require('./app/routes/cursos');
rotaCursos(app); 
let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app); 

app.listen(3000, function(){ //o servidor de app.js vai responder na porta 3000
    console.log("Olá servidor com express foi carregado");
    console.log(texto); // vem do modulo importado lá em cima
});





//let express = require('express');
//let app = express(); //executando o express
//app.set('view engine', 'ejs');
//app.set('views', './app/views');//diretório ondos arquivos estão localizados

// app.get('/', function(req, res){ // o req é a requisição do usuário e o res é a resposta do servidor
//     //res.send("<html><body>Site da Fatec Sorocaba</body></html>");
//     res.render("home/index");
// });

// app.get('/admin/adicionar_usuario', function(req, res){
//     res.render("admin/adicionar_usuario");
// });

//app.get('/historia', function(req, res){
// app.get('/informacao/historia', function(req, res){
//     res.render("informacao/historia");
// });

//app.get('/cursos', function(req, res){
// app.get('/informacao/cursos', function(req, res){
//     res.render("informacao/cursos");
// });

//app.get('/professores', function(req, res){
// app.get('/informacao/professores', function(req, res){
//     res.render("informacao/professores");
// });



