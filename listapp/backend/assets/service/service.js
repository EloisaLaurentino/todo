const db = require('../database/conn');

    const taskService = {
   

    taskPost: function(id, nomeTarefa, descricao, dataCriacao){
        return new Promise((aceito, rejeitado) => {
            db.query(`insert into TAREFAS (nomeTarefa, descricao, fk_IdLista, dataCriacao) value ('${nomeTarefa}','${descricao}', '${id}')`, (erro, results) => {
                if (erro) {rejeitado(erro); return;}
                aceito('Inserido com Sucesso');
            });
        });
    },
    taskPut: function(idTarefa, nomeTarefa, descricao){
        return new Promise((aceito, rejeitado)=>{ 
            db.query(`UPDATE TAREFAS SET nomeTarefa = '${nomeTarefa}', descricao = '${descricao}' WHERE idTarefa = '${idTarefa}'`, function(error, result){
                if(error) {rejeitado(error);return;}
                aceito('Alteração Realizada Com Sucesso!' )
            });
        })
    },

    taskDelete: function(nomeTarefa, ){
        return new Promise((aceito, rejeitado) =>  {
            db.query(`DELETE FROM TAREFAS WHERE pk_idTarefa = '${nomeTarefa}'`, (error, result) =>{
                if(error){rejeitado(error);return;}
                aceito(result);
            });
        });
    },
    task: function(id){
        return new Promise((aceito, rejeitado) => {
            db.query(`SELECT * FROM TAREFAS WHERE pk_idTarefa = '${id}'`, (erro, results) => {
                if (erro) {rejeitado(erro); return;}
                aceito(results);
            });
        });
    },
    listPost: function(id, nomeLista){
        return new Promise((aceito, rejeitado) => {
            db.query(`insert into TAREFAS (nomeLista, id) value ('${nomeLista}', '${id}')`, (erro, results) => {
                if (erro) {rejeitado(erro); return;}
                aceito('Inserido com Sucesso');
            });
        });
    },
    listDelete: function(nomeLista, ){
        return new Promise((aceito, rejeitado) =>  {
            db.query(`DELETE FROM LISTAS WHERE pk_idLista = '${nomeLista}'`, (error, result) =>{
                if(error){rejeitado(error);return;}
                aceito(result);
            });
        });
    },
    list: function(id){
        return new Promise((aceito, rejeitado) => {
            db.query(`SELECT * FROM LISTAS WHERE pk_idLista = '${id}'`, (erro, results) => {
                if (erro) {rejeitado(erro); return;}
                aceito(results);
            });
        });

        }   
}
module.exports = taskService;

