const router = require('express').Router()
const { getTodo , getTodos , createTodo , updateTodo , deleteTodo } = require('./Controllers/Todo')

router.get('/',function (req,res) {
    res.send("Let's build a CRUD Api")    
})

router.get("/todos/:todoID", getTodo);
router.get('/todos', getTodos)
router.post('/todos', createTodo)
router.put('/todos/:todoID', updateTodo)
router.delete("/todos/:todoID", deleteTodo);

module.exports = router