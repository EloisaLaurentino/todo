const mysql = require('mysql2');
const { default: BodyReadable } = require('undici-types/readable');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

connection.connect(function (err ) {
    console.log('funfo');
})

//colocar o call das procedures 


//só um exemplo
connection.query("SELECT nome FROM usuarios", function(err,res){
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
});