//library array , were books will be stored
const myLibrary = [];

//object constructor
function Book(title, author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read === "yes"; //boolean
    this.info = function(){console.log(`Book info! Title: ${this.title}, Author:${this.author}, Number of pages:${this.pages}, Read:${this.read ? 'yes' : 'no'}.`)}
    
}

//function to add book to array

function addBook() {
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the author's name:");
    const pages = prompt("Enter the number of pages:");
    const read = prompt("Have you read this book? (yes/no)");

    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);

    console.log(`Book Added: ${newBook.info()}`);
}

//display books 

function displayLibrary() {
    console.log("My Library:");
    myLibrary.forEach(book => {
        console.log(book.info());
    });
}

addBook(); // Prompt to add a book

displayLibrary(); // Show all books in the library
