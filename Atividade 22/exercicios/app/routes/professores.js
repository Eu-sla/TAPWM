// module.exports=function(app){
//     app.get('/informacao/professores', function(req, res){
//     res.render("informacao/professores");
// });
// }

// para acessar o arquivo de config voltar 1 nivel 
//const dbConnection = require('../config/dbConnection');

//PARA FUNCIONAR AS ROTAS DEVE SER ASSIM, se for na fatec
//SE FOR EM COMPUTADOR PESSOAL DEVE USAR O OUTRO SCRIPT
module.exports = function(app){
   app.get('/informacao/professores', async function(req,res){
      async function getProfessores() {
          try {
            // como está recebendo o app 
            // já foi carregada no autoload e está sendo requisitada somente quando essa rota for    
            //acessada 
                let connection = app.config.dbConnection; 
                const pool = await connection(); 
                //const pool = await dbConnection(); // executando a funcao 
          
                let professoresModel = app.models.professormodel;// variável que recupera a função exporta
               //const results = await pool.request().query('SELECT * from PROFESSORES')
          
               //res.json(results.recordset); fazer assim primeiro pra ver os resultados e depois a debaixo pra realmente mandar pra pagina
 
                //res.render('informacao/professores',{profs: results.recordset}) //issoredireciona para a pagina e manda os resoltados como profs
                
                //executar a função  
                // tem passar a conexao e o callback  
                professoresModel.getProfessores(pool, function(error, results){ 
                    res.render('informacao/professores', { profs : results.recordset }); 
                }); 
    
           } catch (err) {
               console.log(err);
               res.status(500).send('Erro ao buscar professores');
          }
       }
      getProfessores();
   });
}
