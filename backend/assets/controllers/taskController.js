const service = require('../service/service')


const controllerTask ={

    task: async function (req, res){

        if (req) {
            const result = await service.task();
            if (result) {
                res.status(200).json(result)
            } else if (result == []) {
                res.status(404).json("Tarefa não encontrado");
            }
        } else {
            res.json('Sem dados')
        }
    },

    taskId: async function (req, res){
        const id = req.params.id

        if (id) {
            const result = await service.taskId(id);
            if (result) {
                res.status(200).json(result)
            } else if (result == []) {
                res.status(404).json("Tarefa não encontrado");
            }
        } else {
            res.json('Sem dados')
        }
    },

    taskPost: async function(req, res){
        const tipo = req.body.tipo
        const nomeTask = req.body.nomeTask;
        const descricao = req.body.descricao;
        const fk_idLista = req.body.fk_idLista

        if (req) {
            const result = await service.taskPost(fk_idLista, nomeTask, descricao, tipo);
            if (result) {
                res.status(200).json(result);
            }
            else {
                res.status(203);
            }
        } else {
            res.json('Sem dados')
        }
    },

    taskDelete: async function (req, res){
        const idTask = req.params.id;
        const nomeTask = req.params.nomeTask;
     
        if(idTask && nomeTask){
            const result = await service.taskDelete(idTask, nomeTask);
            res.status(200).json("Deletado com sucesso")
            
        }else{
            res.json('Sem parametro')
        }
    },

    taskPut: async function(req, res){
        const idTask = req.params.id;
        const nomeTask = req.body.nomeTask;
        const descricao = req.body.descricao;

        if (idTask && nomeTask && descricao){
            const result = await service.taskPut(idTask, nomeTask, descricao);
            res.status(200).json(result)
 
        }else{
            res.json('Sem campos')
        }
    },
    // controller de lista

    list: async function (req, res){
       
        if (req) {
            const result = await service.list();
            if (result) {
                res.json(result);
            }
            else {
                res.status(203);
            }
        } else {
            res.json('Sem dados')
        }

    },

    listId: async function (req, res){
        const id = req.params.id;
        if (id) {
            const result = await service.listId(id);
            if (result) {
                res.json(result);
            }
            else {
                res.status(203);
            }
        } else {
            res.json('Sem dados')
        }

    },
    listDelete: async function (req, res){
        const idList = req.params.id;
        const nomeList = req.params.nomeLiat;

        if(idList && nomeList){
            const result = await service.listDelete(idList, nomeList);
            res.status(200).json("Deletado com sucesso")

        }else{
            res.json('Sem parametro')
        }

    },
    listPost: async function(req, res){
        const nomeList = req.body.nomeList;

        if (nomeList) {
            const result = await service.listPost(nomeList);
            if (result) {
                res.status(200).json(result)
                
            }
            else {
                res.status(203);
            }
        } else {
            res.json('Sem dados')
        }
    },


}

module.exports = controllerTask;