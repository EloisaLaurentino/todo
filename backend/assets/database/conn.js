const fs = require("fs")
const mysql = require('mysql2');
const express =  require("express");
const cors = require("cors")
const app = express();


//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conexão com o banco de dados MySQL
                
    const connection = mysql.createConnection({
        host: 'todolists.mysql.database.azure.com',
        user: 'todolist',
        password: 'Senai@115',
        database: 'todolist',
        port:3306,
        ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}

    })


// console.log(typeof(connection))
console.log("conectado")

module.exports = connection;
