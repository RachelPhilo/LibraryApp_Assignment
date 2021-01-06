const addBook = document.getElementById('addBook');
const txtTitle = document.getElementById('txtTitle');
const txtAuthor = document.getElementById('txtAuthor');
const txtGenre = document.getElementById('txtGenre');
const txtDes = document.getElementById('txtDes');


const addAuthor = document.getElementById('addAuthor');
const txtName = document.getElementById('txtName');
const txtYear = document.getElementById('txtYear');
const txtDescription = document.getElementById('txtDescription');



addBook.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs(); //custom made func
});

function checkInputs(){
    //get the values from the inputs
    const titleValue=txtTitle.value.trim()
    const AuthorValue=txtAuthor.value.trim()
    const GenreValue=txtGenre.value.trim()
    const DesValue=txtDes.value.trim()


    if(titleValue ===''){
        //show error
        //add error class
        setErrorFor(txtTitle);
    }
    else if(!isAlnum(titleValue)){
        setErrorFor(txtTitle);
    }
    else{
        //add success class
        setSuccessFor(txtTitle);
    }

    if(AuthorValue===''){
        setErrorFor(txtAuthor);
    }
    else if(!isAlpha(AuthorValue)){
        setErrorFor(txtAuthor);
    }
    else{
        setSuccessFor(txtAuthor);
    }

    if(GenreValue===''){
        setErrorFor(txtGenre);
    }
    else if(!isAlpha(GenreValue)){
        setErrorFor(txtGenre);
    }
    else{
        setSuccessFor(txtGenre);

    }

    if(DesValue===''){
        setErrorFor(txtDes);
    }
    else if(!isAlnum(DesValue)){
        setErrorFor(txtDes);
    }
    else{
        setSuccessFor(txtDes);

    }

}




addAuthor.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputsAuthor(); //custom made func
});

function checkInputsAuthor(){
    //get the values from the inputs
    const NameValue=txtName.value.trim();
    const YearValue=txtYear.value.trim();
    const DescriptionValue=txtDescription.value.trim();
    


    if(NameValue ===''){
        //show error
        //add error class
        setErrorFor(txtName);
    }
    else if(!isAlpha(NameValue)){
        setErrorFor(txtName);
    }
    else{
        //add success class
        setSuccessFor(txtName);
    }

    if(YearValue===''){
        setErrorFor(txtYear);
    }
    else if(!isYear(YearValue)){
        setErrorFor(txtYear);
    }
    else{
        setSuccessFor(txtYear);
    }

    if(DescriptionValue===''){
        setErrorFor(txtDescription);
    }
    else if(!isAlnum(DescriptionValue)){
        setErrorFor(txtDescription);
    }
    else{
        setSuccessFor(txtDescription);

    }

}


function setErrorFor(input){
    const formControl = input.parentElement;  //.form-control

    //add error class
    formControl.className = 'form-group error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-group success';

}

function isAlnum(input){
    var Regex = /^[a-zA-Z0-9]+$/;
    return Regex.test(input);
}

function isAlpha(input){
    var Regex = /^[A-Za-z]+$/;
    return Regex.test(input);
}
function isYear(year){
    var YearRegex = /(?<=(?:\s|\.|_|\-|\+|\(|\[))(?:19[2-9]|20[0-2])\d(?=\s|$|\.|_|\-|\+|\)|\])/;
    return YearRegex.test(year);
}




// To attach image 
function showFiles(){
    let inputField = document.getElementById("imgFile");
    let file=inputField.files;
    let fileReader = new FileReader;
    fileReader.onload = function(event){
        let ImageURL=fileReader.result;
        $('#preview').attr("src",`${ImageURL}`);
    }
    fileReader.readAsDataURL(file[0]);
}

function showFile(){
    let inputFields = document.getElementById("imgFiles");
    let files=inputFields.files;
    let fileReaders = new FileReader;
    fileReaders.onload = function(event){
        let ImagesURL=fileReaders.result;
        $('#previews').attr("src",`${ImagesURL}`);
    }
    fileReaders.readAsDataURL(files[0]);
}