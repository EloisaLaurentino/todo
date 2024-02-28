const db = require("../database/conn");

const taskService = {
  taskPost: function (fk_idLista, nomeTarefa, descricao, tipo) {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `insert into TAREFAS (fk_idLista, nomeTarefa, descricao, tipo) value ('${fk_idLista}','${nomeTarefa}','${descricao}', '${tipo}')`,
        (erro, results) => {
          if (erro) {
            rejeitado(erro);
            return;
          }
          aceito("Inserido com Sucesso");
        }
      );
    });
  },
  taskPut: function (idTarefa, nomeTarefa, descricao, tipo) {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `call modificarTarefa(${idTarefa}, ${nomeTarefa}, ${descricao}, ${tipo})`,
        function (error, result) {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito("Alteração Realizada Com Sucesso!");
        }
      );
    });
  },

  taskDelete: function (idTask) {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `DELETE FROM TAREFAS WHERE pk_idTarefa = '${idTask}'`,
        (error, result) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(result);
        }
      );
    });
  },
  task: function (id) {
    return new Promise((aceito, rejeitado) => {
      db.query(`SELECT * FROM TAREFAS`, (erro, results) => {
        if (erro) {
          rejeitado(erro);
          return;
        }
        aceito(results);
      });
    });
  },
  taskId: function (id) {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `SELECT * FROM TAREFAS WHERE pk_idTarefa = '${id}'`,
        (erro, results) => {
          if (erro) {
            rejeitado(erro);
            return;
          }
          aceito(results);
        }
      );
    });
  },
  listPost: function (nomeList) {
    console.log(nomeList);
    return new Promise((aceito, rejeitado) => {
      db.query(
        `insert into LISTAS (nomeLista) value ('${nomeList}')`,
        (erro, results) => {
          if (erro) {
            rejeitado(erro);
            return;
          }
          aceito("Inserido com Sucesso");
        }
      );
    });
  },
  listDelete: function (idList) {
    return new Promise((aceito, rejeitado) => {
      db.query(`CALL excluirLista(${idList})`, (error, result) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(result);
      });
    });
  },

  list: function (id) {
    return new Promise((aceito, rejeitado) => {
      db.query(`SELECT * FROM LISTAS`, (error, result) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(result);
      });
    });
  },

  listPut: function (idList, nomeList) {
    return new Promise((aceito, rejeitado) => {
      db.query(`call modificarLista(${idList}, ${nomeList})`, (error, result) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(result);
      });
    });
  },

  listId: function (id) {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `SELECT * FROM LISTAS WHERE pk_idLista = '${id}'`,
        (erro, results) => {
          if (erro) {
            rejeitado(erro);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
module.exports = taskService;
