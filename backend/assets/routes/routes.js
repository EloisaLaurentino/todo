const router = require('express').Router();

const controllerTask = require('../controllers/taskController')
// Rotas de tarefas
router
    .route("/task")
    .get((req, res) => controllerTask.task(req, res))
router
    .route("/taskP")
    .post((req, res) => controllerTask.taskPost(req, res))
router
    .route("/task/:id")
    .get((req, res) => controllerTask.taskId(req, res))
router
    .route("/task/:id")
    .delete((req, res) => controllerTask.taskDelete(req, res))
router
    .route("/task/:id")
    .put((req, res) => controllerTask.taskPut(req, res))

// rotas de lista
router
    .route("/listP")
    .post((req, res) => controllerTask.listPost(req, res))
router
    .route("/list/:id")
    .delete((req, res) => controllerTask.listDelete(req, res))
router
    .route("/list/:id")
    .get((req, res) => controllerTask.listId(req, res))
router
    .route("/list")
    .get((req, res) => controllerTask.list(req, res))


module.exports = router;