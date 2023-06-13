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

        newBookContainer.innerHTML = 
            `<div>${book.title} by ${book.author}</div>
            <div>
                <label for="read-status${i}">Read?</label>
                <input type="checkbox" id="read-status${i}">
                <button class="remove-button" onclick="removeBook(${i})">Remove</button>
            </div>`;
        booksContainer.appendChild(newBookContainer);
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

function removeBook(i) {
    myLibrary.splice(i, 1);
    Book.prototype.pushBook();
    console.log(myLibrary);
}