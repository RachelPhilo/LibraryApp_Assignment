const express = require("express");  

// const booksRouter = express.Router();   //creating seperate router for each page
const app = new express();  
const nav = [
    {link:'/home',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addnew',name:'Add New Item'}
];

const homepage ={link:'/home',name:'Home'};
const navlink ={link:'/signup',name:'SignUp'};


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorsRoutes')(nav);
const homeRouter = require('./src/routes/homeRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes');
const addNewRouter = require('./src/routes/addNewRoutes')(nav);


app.use(express.static('./public')); //for enabling the use of static files

app.set('view engine','ejs');  //  setting the view engine as ejs
app.set('views',__dirname + '/src/views');  //settiing initial path

app.use('/books',booksRouter);   //Using booksRouter
app.use('/authors',authorsRouter); //Using authorsRouter
app.use('/home',homeRouter);
app.use('/signup',signupRouter);
app.use('/addnew',addNewRouter);


app.get('/',function(req,res){  
    
    res.render("index",
    {
        // nav,
        title:'Library App',
        homepage,
        navlink
    }
    );  //passing data from server to ejs file
});



app.listen(5000);










// -----------------------Method 1 to create route for books page---------------------
// app.get('/books',function(req,res){ 
//     res.render("books",
//     {
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//         title:'Books'
//     }
//     );
// });

// creating an array of books to pass it as a n obj to list books 
// var books = [
//     {
//         title:'Tom and Jerry',
//         author:'Joseph B',
//         genre:'Cartoon',
//         img: 'book.png'
//     },
//     {
//         title:'Harry Potter',
//         author:'J K Rowling',
//         genre:'Fantasy',
//         img: 'book.png'
//     },
//     {
//         title:'Tale of two cities',
//         author:'Charles Dickends',
//         genre:'Fiction',
//         img: 'book.png'
//     }
// ]


// // ----------------------method 2 (Recommended)--------------------
// // creating a seperate Router for each new route
// booksRouter.get('/',function(req,res){ 
//         res.render("books",
//         {
//             nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//             title:'Books',
//             books
//         }
//         );
//     });

// booksRouter.get('/single',function(req,res){
//     res.send("I am a single book");
// });

// booksRouter.get('/:id',function(req,res){
//     const id = req.params.id;
//     res.render('book',
//     {
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//         title:'Book',
//         book:books[id]   //key value pair in object
//     }
//     )

// });
// app.listen(5000);

