const express = require("express");  //exporting express

const app = new express();  //init express

app.get('/',function(req,res){  //creating route handlers
    res.send("Hello World");    //when route matches to '/' then the server sends a response 'Hello World' to the client
} );

app.listen(5000);  //Listen on a port