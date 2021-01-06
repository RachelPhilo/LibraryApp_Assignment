const express = require("express");  

const app = new express();  


app.use(express.static('./public'));
app.set('view engine','ejs');  //  setting the view engine as ejs
app.set('views',__dirname + '/src/views')  //settiing initial path


app.get('/',function(req,res){  
    // res.sendFile(__dirname+"/src/views/index.ejs");  //used to send files like html
    // res.render("index");    //send files inside template engine
    res.render("index",{books:['Pride and Prejudice','Tale of Two Cities'],title:'Library'});  //passing data from server to ejs file
});

app.listen(5000);