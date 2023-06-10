const booksContainer = document.querySelector(".books-container-inner");
const newBookbtn = document.querySelector("#new-book");
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


Book.prototype.pushBook = function() {
    let newBook = document.createElement("div");
    newBook.textContent = `${this.title} by ${this.author}`;
    booksContainer.appendChild(newBook);
}


const warAndPeace = new Book ("War and Peace", "Leo Tolstoy");
const dune = new Book ("Dune", "Frank Herbert");
const theAeneid = new Book("The Aeneid", "Virgil");
const harryPotter = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling");
const canterburyTales = new Book("The Canterbury Tales", "Chaucer");
const byzantineState = new Book("The History of the Byzantine State", "George Ostrogrosky");
const paradiseLost = new Book("Paradise Lost", "John Milton");

newBookbtn.addEventListener("click", () => {
    const newTitle = prompt("Add a new book title", "Treasure Island");
    const newAuthor = prompt("Add the book's author", "Robert L. Stevenson");
    addNewBook(newTitle, newAuthor);
});

function addNewBook(title, author) {
    const userNewBook = new Book(title, author);
}

//Next need to create pop up form - see here on how to do so: https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html

