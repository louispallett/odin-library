const booksContainer = document.querySelector(".books-container-inner");
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
    booksContainer.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const newBookContainer = document.createElement("div");
        newBookContainer.classList.add("new-book-container");
        const newBookElement = document.createElement("div");
        const newBookRight = document.createElement("div");
        newBookElement.textContent = `${book.title} by ${book.author}`;
        booksContainer.appendChild(newBookContainer);
        newBookContainer.appendChild(newBookElement);
        newBookContainer.appendChild(newBookRight);
        const removeButtonElement = document.createElement("button");
        removeButtonElement.textContent = "Remove";
        removeButtonElement.classList.add("remove-button");
        newBookRight.appendChild(removeButtonElement);
    }
}

const warAndPeace = new Book ("War and Peace", "Leo Tolstoy");
const dune = new Book ("Dune", "Frank Herbert");
const theAeneid = new Book("The Aeneid", "Virgil");
const harryPotter = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling");
const canterburyTales = new Book("The Canterbury Tales", "Chaucer");
const byzantineState = new Book("The History of the Byzantine State", "George Ostrogrosky");
const paradiseLost = new Book("Paradise Lost", "John Milton");

function addNewBook(title, author) {
    const userNewBook = new Book(title, author);
}

//Next need to create pop up form - see here on how to do so: https://www.w3docs.com/snippets/javascript/how-to-create-a-popup-form-using-javascript.html

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    newAuthorText.value = "";
    newTitleText.value = "";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

const submitBookBtn = document.querySelector("#add-new-book");
const newAuthorText = document.querySelector("#author");
const newTitleText = document.querySelector("#title");

submitBookBtn.addEventListener("click", () => {
    const newAuthor = newAuthorText.value;
    const newTitle = newTitleText.value;
    addNewBook(newTitle, newAuthor);
    closeForm();
})

Book.prototype.removeBook = function() {

}

const removeBookBtn = document.querySelector(".remove-button");

removeBookBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary[this], 1);
    console.log(myLibrary);
})