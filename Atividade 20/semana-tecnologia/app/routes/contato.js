module.exports=function(app){
    app.get('/evento/contato', function(req, res){
    res.render("evento/contato");
});
}