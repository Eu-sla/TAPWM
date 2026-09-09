module.exports=function(app){
    app.get('/evento/programacao', function(req, res){
    res.render("evento/programacao");
});
}