const express = require ("express");
const Handlebars = require('handlebars');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const Pagamento = require("./models/Pagamento");


var hbs = exphbs.create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Rotas

app.get('/pagamento', function(req,res){
        Pagamento.findAll().then(function(pagamentos){
            res.render('pagamento',{pagamentos:pagamentos});
        })
    
 })
app.get('/cad-pagamento', function(req,res){
    res.render('cad-pagamento')
});

app.post('/add-pagamento', function(req,res){
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/pagamento')
        //res.send("Pagamento cadastrado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi cadastrado" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor" + req.body.valor + "<br>")
})

app.get('/cad-cliente', function(req,res){
    res.render('cad-cliente')
});


//Apagar registro

/*app.get('/del-pagamento/:dataValues.id', function(req,res){
    Pagamento.destroy({
        where: {'dataValues.id':7}
     })
});*/

app.listen(3000);





























// instalar sequelize: npm i --save sequelize 
// npm i --save mysql2

/*const Sequelize = require('sequelize');

const sequelize = new Sequelize('banco_dados', 'celkone','123456',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
   console.log('Conexao realizada com sucesso!')
}).catch(function(err){
   console;log('Erro ao realizar conexao com BD ' + err);
});

const Pagamento = sequelize.define('pagamentos',{
// atributos
  nome:{
    type: Sequelize.STRING,
  },
  valor: {
    type: Sequelize.DOUBLE
  }

});
//Criar tabela com Sequelize
//User.sync({force:true});

Pagamento.create({
    nome: "Energia", 
    valor: 220
}) */































//const express = require('express');

//const app = express();

//Conexão com BD MySQL

//const mysql = require('mysql');

/*const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'celkone',
    password : '123456',
    database : 'banco_dados'
  });

  connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
  });*/


//Pausar nodemo quando for cadastrar se não vai cadastrar + de 1 vez, executar apenas com node app.js, tbm a cada mudança alterada ctrl C e node app.js








/*connection.query("DELETE FROM users WHERE id = 16", function(err,result){
    if (!err){
        console.log("Usuario apagado com sucesso!");
    }else{
        console.log("Erro: o usuario nao foi apagado com sucesso!");
    }
}); */







/*connection.query("UPDATE users SET id ='5' WHERE id = 17", function(err,result){
    if(!err){
       console.log('Usuario editado com sucesso!')
    }else{
       console.log('Erro: o usuario nao foi editado com sucesso')
    }
});  */









  /*connection.query("INSERT INTO users (nome, email) VALUES ('Jessica', 'jessica@gmail.com')", function(err,result){
    if (!err){
        console.log('Usuario Cadastrado com sucesso!')
    }else{
        console.log('Erro ao cadastrar o usuario')
    }
  }) */















  /*connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM users', function(err,rows,fields){
    if (!err){
        console.log('Resultado: ',rows);   
    }else{
        console.log('Erro ao realizar a consulta');
    }
  })

app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function (req,res){
    res.end("Pagina de contato")
});

app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname+"/src/sobre-empresa.html")
});

app.get("/blog", function(req,res){
    res.end("Blog")
});

app.listen(3000);  */
