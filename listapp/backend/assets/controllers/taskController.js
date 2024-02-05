const service = require('../service/service')


const controllerTask ={

    task: async function (req, res){
        const id = req.params.id;

        if (id) {
            const result = await service.task(id);
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
        const id = req.params.id;
        const nomeTask = req.params.nomeTask;
        const descricao = req.params.descricao;

        if (id) {
            const result = await service.taskPost(id, nomeTask, descricao);
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
        const id = req.params.id;
        if (id) {
            const result = await service.list(id);
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
        const id = req.params.id;
        const nomeList = req.params.nomeList;
    
        if (id) {
            const result = await service.taskPost(id, nomeList, descricao);
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