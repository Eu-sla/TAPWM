// module.exports=function(app){
//     app.get('/informacao/professores', function(req, res){
//     res.render("informacao/professores");
// });
// }

//PARA FUNCIONAR AS ROTAS DEVE SER ASSIM, se for na fatec
//SE FOR EM COMPUTADOR PESSOAL DEVE USAR O OUTRO SCRIPT
module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
       const sqlConfig = {
           user: 'DS2612008', //7 últimos dígitos do seu RA
           password: 'Isa19122007',
           database: 'LP2', 
           server: 'APOLO',
           options: {
               encrypt: false,
               trustServerCertificate: true,
           }
       }
  
// 
      async function getProfessores() {
          try {
              const pool = await sql.connect(sqlConfig);
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
               //res.json(results.recordset); fazer assim primeiro pra ver os resultados e depois a debaixo pra realmente mandar pra pagina
 
                res.render('informacao/professores',{profs: results.recordset}) //issoredireciona para a pagina e manda os resoltados como profs
    
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}