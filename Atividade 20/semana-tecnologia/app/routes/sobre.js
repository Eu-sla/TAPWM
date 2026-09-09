module.exports=function(app){
    app.get('/evento/sobre', function(req, res){
    res.render("evento/sobre");
});
}