const { request, response } = require("express");
const express = require("express");
const app = express();
// importing mongoose
const mongoose = require('mongoose');
// importing todoController
const todoContoller = require ('./controllers/todoController');
app.get("/",(request,response) => { 
    response.send
("hello this is a get response");
});
app.post("/",(request,response)=>{
response.send("hello this is a post response")
}
);
app.put ("/",(request,response)=>{
    response.send("hello this is a put response")
}
)
// listening to requires on localhost por 3004
app.listen(3004,()  => {
    console.log("My server is up and running on port 3004");
    // connecting to the database
    mongoose.connect('mongodb+srv://0245880328:0245880328@cluster0.sdwxz.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("DataBase is connected");
    })
    .catch(function(error){
        console.log(`DataBase not connect ${error}`);
    })
}  );

app.get("/todos",(request,response)=>{
    response.send([{
        'title':"plan trip to kumasi",
        "time":"today",
        "iscomplete":false

    }]);
    app.get("/username",(request,response)=>{
        response.send([{
            "username":"wendy",
            "pasword":"sis"

        }])
    }

    )
}
);