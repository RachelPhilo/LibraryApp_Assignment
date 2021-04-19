const express = require('express');
const addNewRouter = express.Router();

const Bookdata = require('../model/Bookdata');
const multer = require('multer'); //Require multer for accessing ext img

//define storage for images
const storage = multer.diskStorage({

    //destination for files
    destination:function(req,file,callback){
        callback(null,'./public/images/post');
    },

    //add back the extension
    filename : function(req,file,callback){
        callback(null,file.originalname)
    }
});

//upload parameters for multer
const upload = multer({
    storage:storage,
    // limits:{fileSize:1024*1024*3}
});

function routerAdd(nav){

    addNewRouter.get('/',function(req,res){
        res.render("addNew",
        {
            nav,
            title:'Add New Book'
        });

    });

    

    
    addNewRouter.post('/addBook',upload.single('image'),function(req,res){
        // res.send("Hey,New Book Added.");
        console.log(req.file);
       
        //For accessing query parameters from URL when using GET method use 'query' instead of 'body' 
        var item ={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.body.image
        }; 

        var book = Bookdata(item); //Passing to database codes
        book.save(); //Saving to database
        res.redirect('/books');
     });

    
    return addNewRouter;

};

module.exports= routerAdd;