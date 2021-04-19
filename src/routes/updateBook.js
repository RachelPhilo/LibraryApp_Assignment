const express = require('express');
const updatebookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './public/images');
    },
    filename: function(req, file, callback){
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});

function router(nav){
    updatebookRouter.post('/:id', function(req, res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('updateBook', {
                nav,
                title: 'Library',
                id: book._id
            })
        })
    });
    updatebookRouter.post('/:id/update', upload.single('image'), function(req, res){
        const id = req.params.id;
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            image: req.body.image
        }
        Bookdata.updateOne({_id:id}, {title:item.title, author:item.author, genre:item.genre,description:item.description,image:item.image})
        .then(function(){
            res.redirect('/books');
        })
    });

    return updatebookRouter;
}

module.exports = router;