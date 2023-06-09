//let newBook = document.getElementById("books");
let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;

    this.addToLibrary();
}

Book.prototype.addToLibrary = function() {
    myLibrary.push(this);
}

//addBookToLibrary();

const warAndPeace = new Book ("War and Peace", "Leo Tolstoy");
const dune = new Book ("Dune", "Frank Herbert");
const theAeneid = new Book("The Aeneid", "Virgil");

console.log(myLibrary);
console.log(Object.getPrototypeOf(Book));

/* for(let i = 0; i < myLibrary.length; i++) {
    newBook.textContent = myLibrary[i];
} */