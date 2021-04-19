
//Accessing Mongoose package
const mongoose = require("mongoose");    

//Database Connection

// MongoDB cloud Integration
mongoose.connect('mongodb+srv://userone:userone@fsdfiles.l831m.mongodb.net/LibraryApp?retryWrites=true&w=majority'); 
//MongoDB Compass Connection
// mongoose.connect('mongodb://localhost:27017/Library'); 

//Defining Schema
const Schema = mongoose.Schema;  


//Creating a single schema
const BooksSchema = new Schema({
   title: String,
   author: String,
   genre: String,
   description: String,
   image: String 
});

//Creating Model for the above schema
var Bookdata = mongoose.model('BookData',BooksSchema);


//exporting the model 
module.exports = Bookdata;