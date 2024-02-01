const fs = require("fs")
const mysql = require('mysql2');
const express =  require("express");
const cors = require("cors")
const app = express();


//Midlewares da API
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Coneção com o banco de dados MySQL

function ligarBd(){
  
    return new Promise((resolve,reject) =>{

        try{
                
            const connection = mysql.createConnection({
                host: 'todolists.mysql.database.azure.com',
                user: 'todolist',
                password: 'Senai@115',
                database: 'todolists',
                port:3306,
                ssl:{ca:fs.readFileSync("DigiCertGlobalRootCA.crt.pem","base64")}
 
            })
            resolve(200)

        }
        catch(err){
            reject(err)
        }

    })

}

const connection = ligarBd()

console.log(connection)
