module.exports=function(app){
    app.get('/', function(req, res){ // o req é a requisição do usuário e o res é a resposta do servidor
    //res.send("<html><body>Site da Fatec Sorocaba</body></html>");
    res.render("home/index");
});
}