const booksContainer = document.querySelector(".books-container-inner");
const submitBookBtn = document.querySelector("#add-new-book");
const newAuthorText = document.querySelector("#author");
const newTitleText = document.querySelector("#title");
const newPagesText = document.querySelector("#pages");
const newReadStatusValue = document.querySelector("#read-status");
let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

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

        /* newBookContainer.innerHTML = 
            `<div>${book.title} by ${book.author}</div>
            <div>
                <label for="read-status${i}">Read?</label>
                <input type="checkbox" id="read-status${i}">
                <button class="remove-button" onclick="removeBook(${i})">Remove</button>
            </div>`; */

        newBookContainer.innerHTML = 
        `<div>
            <div><i>${book.title}</i> &nbsp;by ${book.author}</div>
            <div>${book.pages} pages</div>
        </div>
        <div>
            <button class="read-status" onclick="readStatus()">${book.readStatus}</button>
            <button class="remove-button" onclick="removeBook(${i})">Remove</button>
        </div>`;
        booksContainer.appendChild(newBookContainer);
    }
}

const warAndPeace = new Book ("War and Peace", "Leo Tolstoy", 956, "Read");
const dune = new Book ("Dune", "Frank Herbert", 844, "Read");
const theAeneid = new Book("The Aeneid", "Virgil", 321, "Not Read");
const harryPotter = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 561, "Read");
const canterburyTales = new Book("The Canterbury Tales", "Chaucer", 368, "Read");
const byzantineState = new Book("The History of the Byzantine State", "George Ostrogrosky", 697, "Not Read");
const paradiseLost = new Book("Paradise Lost", "John Milton", 289, "Read");

//Need to add pages and read status here (parameters)
function addNewBook(title, author, pages, readStatus) {
    const userNewBook = new Book(title, author, pages, readStatus);
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    newAuthorText.value = "";
    newTitleText.value = "";
    newPagesText.value = ""; 
    newReadStatusValue.checked == false;
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

submitBookBtn.addEventListener("click", () => {
    const newAuthor = newAuthorText.value;
    const newTitle = newTitleText.value;
    const newPages = newPagesText.value;
    if (newReadStatusValue.checked == true) {
        newReadStatus = "Read";
    } else {
        newReadStatus = "Not Read";
    }
    
    addNewBook(newTitle, newAuthor, newPages, newReadStatus);
    closeForm();
})

function removeBook(i) {
    myLibrary.splice(i, 1);
    Book.prototype.pushBook();
    console.log(myLibrary);
}