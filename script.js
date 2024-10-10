const dialog = document.querySelector("dialog"); 

const openDialogButton = document.querySelector("[data-open-modal]");
const closeDialogButton = document.querySelector("[data-close-modal]");

openDialogButton.addEventListener("click", () => {
    dialog.show();
});
closeDialogButton.addEventListener("click", () => {
    dialog.close();
});

// Library array where books will be stored
const myLibrary = [];

// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "yes"; // boolean
    this.info = function() {
        console.log(`Book info! Title: ${this.title}, Author: ${this.author}, Number of pages: ${this.pages}, Read: ${this.read ? 'yes' : 'no'}.`);
    };
}

// Method to toggle read status
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read; // Toggle the read status
};

// Function to add book to array
function addBook() {
    const inputTitle = document.querySelector("#input-title");
    const inputAuthor = document.querySelector("#input-author");
    const inputPages = document.querySelector("#input-pages");
    const inputRead = document.querySelector("#input-read");

    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const read = inputRead.value;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(`Book Added: ${newBook.info()}`);
}

// Function to display books in the library
function displayLibrary() {
    console.log("My Library:");
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear previous entries

    myLibrary.forEach((book, index) => {
        console.log(book.info());
       
        // Create a new div
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.setAttribute("data-index", index); // Set data attribute for index

        // Append bookDiv to Library div
        libraryDiv.appendChild(bookDiv);

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
        cardRead.textContent = book.read ? 'Read' : 'Not Read';
        bookDiv.appendChild(cardRead); // Append it to the div

        // Button to toggle read status
        const toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = book.read ? 'Mark as Not Read' : 'Mark as Read';
        toggleReadButton.addEventListener("click", () => {
            book.toggleReadStatus();
            displayLibrary(); // Refresh the display
        });
        bookDiv.appendChild(toggleReadButton);

        // Button to remove the book
        const removeButton = document.createElement("button");
        removeButton.textContent = 'Remove Book';
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1); // Remove the book from the array
            displayLibrary(); // Refresh the display
        });
        bookDiv.appendChild(removeButton);
    });
}

const saveButton = document.querySelector("#form"); 
saveButton.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission
    addBook();
    displayLibrary();
    dialog.close(); // Close the dialog after saving
});
