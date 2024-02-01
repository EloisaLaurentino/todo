const mysql = require('mysql2');
const express =  require("express");
const cors = require("cors")
const app = express();


//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Coneção com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'todolists.mysql.database.azure.com',
    user: 'todolist',
    password: 'Senai@115',
    database: 'todolists'
})

connection.connect(function (err ) {
    console.log('funfo');
})

//colocar o call das procedures 

//só um exemplo

    var nome = request.params.id;

connection.query("CALL mudarNome(?)", [nome], function(err,res){
    if(!err){
        console.log(res)
    }
    else{
        console.log(err)
    }
});
