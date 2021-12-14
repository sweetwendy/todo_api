const todoModel = require("../models/todoModel");

function addTodo(request,response){

}

function getAllTodo(request,response){
    response.send("hello this getAllTodo controller")
}

function updateById(request,response){

}
function delateById(request,response){

}



module.exports = {
    addTodo,
    getAllTodo,
    updateById,
    delateById
}