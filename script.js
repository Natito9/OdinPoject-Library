function Book(title, author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){console.log(`Book info! Title: ${this.title}, Author:${this.author}, Number of pages:${this.pages}, Read:${this.read}.`)}
    
}

const theHobbit = new Book ("The hobbit","J. R. R. Tolkien","320","yes")
console.log(theHobbit.info());