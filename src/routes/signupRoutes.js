const express = require("express");
const signupRouter = express.Router();

signupRouter.get('/',function(req,res){
    res.render('signup',
    {
        title : 'Sign Up'
    });
});

module.exports=signupRouter;