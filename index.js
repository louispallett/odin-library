const booksContainer = document.querySelector(".books-container");
const newBook = document.createElement("div");
let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;

    this.addToLibrary();
    this.pushBook();
}

Book.prototype.addToLibrary = function() {
    myLibrary.push(this);
}

//Do we need a loop here? Time to write out some pseudo-code...
Book.prototype.pushBook = function() {
    newBook.textContent = this.title;
    booksContainer.appendChild(newBook);
}

//addBookToLibrary();

const warAndPeace = new Book ("War and Peace", "Leo Tolstoy");
const dune = new Book ("Dune", "Frank Herbert");
const theAeneid = new Book("The Aeneid", "Virgil");

console.log(myLibrary);
console.log(Object.getPrototypeOf(Book));

//const result = JSON.stringify(myLibrary);