const dialog = document.querySelector("dialog"); 

const openDialogButton = document.querySelector("[data-open-modal]");
const closeDialogButton = document.querySelector("[data-close-modal]");


openDialogButton.addEventListener("click",() => {
    dialog.show()
})
closeDialogButton.addEventListener("click",() => {
    dialog.close()
})

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

//function to add book to array, thi will connect to the html after
function addBook() {
    const inputTitle = document.querySelector("#input-title");
    const inputAuthor = document.querySelector("#input-author");
    const inputPages = document.querySelector("#input-pages");
    const inputRead = document.querySelector("#input-read");

    const title = inputTitle.value
    const author = inputAuthor.value
    const pages = inputPages.value
    const read = inputRead.value

    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
//console check
    console.log(`Book Added: ${newBook.info()}`);

}

//display books on console
function displayLibrary() {
    console.log("My Library:");
    
    myLibrary.forEach(book => {
        console.log(book.info());
       
        //create a new div
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card")
             //here after add index data to delete it (delete button)
           //append bookDiv to Library div
        document.getElementById("library").appendChild(bookDiv);

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = book.title;
        bookDiv.appendChild(cardTitle);

        const cardAuthor = document.createElement("p");
        cardAuthor.classList.add("card-author");
        cardAuthor.textContent = book.author;
        bookDiv.appendChild(cardAuthor);

        const cardPages = document.createElement("p");
        cardPages.classList.add("card-pages");
        cardPages.textContent = book.pages;
        bookDiv.appendChild(cardPages);

        const cardRead = document.createElement("p");
        cardRead.classList.add("card-read");
        cardRead.textContent = book.read;
        bookDiv.appendChild(cardRead); //append it to the div

    });
}

const saveButton = document.querySelector("#form"); 
saveButton.addEventListener("submit",(e) => {
    addBook()
    displayLibrary()
    e.preventDefault()
})


