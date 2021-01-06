const express = require("express"); 
const booksRouter = express.Router(); 
function router(nav){
    // creating an array of books to pass it as an obj to list books 

var books = [
    {
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'Cartoon',
        img: 'tom and jerry.png',
        des:'Tom and Jerry is a series of theatrical musical cartoon shorts created by William Hanna and Joseph Barbera for Metro-Goldwyn-Mayer that centered on a never-ending rivalry between a house cat (Tom) and a mouse (Jerry) whose chases and battles often involved comic violence.'
    },
    {
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'Fantasy',
        img: 'HarryPotter.jpg',
        des:"J.K. Rowling's popular children's novel Harry Potter,is about a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."
    },
    {
        title:'Tale of two cities',
        author:'Charles Dickens',
        genre:'Fiction',
        img: 'Tale of two cities.jpg',
        des:'The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror.'
    }
]


// ----------------------method 2 (Recommended)--------------------
// creating a seperate Router for each new route
booksRouter.get('/',function(req,res){ 
        res.render("books",
        {
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav,
            title:'Books',
            books
        }
        );
    });


    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',
        {
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav,
            title:'Book',
            book:books[id]   //key value pair in object
        }
        );
    
    });

    return booksRouter
};


// exporting booksRouter to be used in other files
// module.exports = booksRouter;

module.exports = router;