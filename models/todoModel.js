const mongoose = require ('mongoose');

const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    time:Date,
    iscompleted: Boolean
})

const todoModel = mongoose.model("todos",todoschema);

module.experts =todoModel