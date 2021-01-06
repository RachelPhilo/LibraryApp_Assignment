const express = require('express');
const authorsRouter = express.Router();

function routerAuthor(nav){
    var authors = [
        {
            name:'Fyodor Dostoevsky',
            year:'(1821–1881)',
            img:'Dostoevsky.jpg',
            description:'Few authors have been as personally familiar with desperation as Fyodor Dostoevsky (1821-1881), and none have been so adept at describing it. His harrowing experiences in Russian prisons, combined with a profound religious philosophy, formed the basis for his greatest books: Crime and Punishment, The Idiot, The Possessed, and The Brothers Karamazov. When Dostoevsky died in 1881, he left a legacy of masterful novels that immortalized him as a giant of Russian literature.'
        },
        {
            name:'Victor Hugo',
            year:'(1802–1885)',
            img:'Victor Hugo.jpg',
            description:'"If a writer wrote merely for his time, I would have to break my pen and throw it away," the larger-than-life Victor Hugo once confessed. Indeed, this 19th-century French authors books — from the epic drama Les Misérables to the classic unrequited love story The Hunchback of Notre Dame — have spanned the ages, their themes of morality and redemption as applicable to our times as to his.'
        },{
            name:'William Shakespeare',
            year:'(1564–1616)',
            img:'William Shakespeare.jpg',
            description:'Widely esteemed as the greatest writer in the English language, William Shakespeare (1564-1616) was an actor and theatrical producer in addition to writing plays and sonnets. Dubbed "The Bard of Avon," Shakespeare oversaw the building of the Globe Theatre in London, where a number of his plays were staged, the best-known of which include Romeo and Juliet, Hamlet, and Macbeth. The First Folio, a printed book of 36 of his comedies, tragedies, and history plays, was published in 1623.'
        },
        {
            name:'Charles Dickens',
            year:'(1812-1870)',
            img:'Charles Dickens.jpg',
            description:'Charles Dickens (1812-1870) is probably the greatest novelist England has ever produced, the author of such well-known classics as A Christmas Carol, Great Expectations, David Copperfield and Oliver Twist. His innate comic genius and shrewd depictions of Victorian life — along with his indelible characters — have made his books beloved by readers the world over.'
        }
    ]

    // Route for authors
    authorsRouter.get('/',function(req,res){
        res.render("Authors",
        {
            nav,
            title:'Authors',
            authors
        }
        );
    });

    // Route for single author
    authorsRouter.get('/:index',function(req,res){
        const index = req.params.index;
        res.render("Author",
        {
         nav,
         title:'Author',
         AuthorList:authors[index]   
        });
    });

    return authorsRouter;

};

module.exports =routerAuthor;