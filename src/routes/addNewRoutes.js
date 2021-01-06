const express = require('express');
const addNewRouter = express.Router();

function routerAdd(nav){

    addNewRouter.get('/',function(req,res){
        res.render("addNew",
        {
            nav,
            title:'Add New'
        });

    });

    return addNewRouter;

};

module.exports= routerAdd;