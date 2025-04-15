const myLibrary = [];

class Book {
    constructor(title, author, pageNum, hasRead) {
      this.title = title;
      this.author = author;
      this.pageNum = pageNum;
      this.hasRead = hasRead;
    }

    toggleReadStatus() {
        this.hasRead = !this.hasRead;
    }

    displayBook() {
        const book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute("data-index", myLibrary.indexOf(this));

        const author = document.createElement('h3');
        author.classList.add('author');
        author.textContent = this.author;

        const title = document.createElement('p')
        title.classList.add('title')
        title.textContent = this.title;

        const pageNum = document.createElement('p');
        pageNum.classList.add('pages')
        pageNum.textContent = this.pageNum + " pages";

        const hasRead = document.createElement('p')
        hasRead.classList.add('read-status');
        hasRead.textContent = this.hasRead ? "Read" : "Not Read";

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = "Delete Book";

        deleteButton.addEventListener('click', function(e) {
            const bookDiv = e.target.parentElement;
            const bookIndex = bookDiv.getAttribute('data-index');
            myLibrary.splice(bookIndex, 1);
            updateLibraryDisplay();
        });

        const changeReadStatusButton = document.createElement('button');
        changeReadStatusButton.classList.add('read-status-button');
        changeReadStatusButton.textContent = 'Change Read Status';

        changeReadStatusButton.addEventListener('click', (e) => {
            this.toggleReadStatus();
            hasRead.textContent = this.hasRead ? "Read" : "Not Read";
        });

        book.append(author,title,pageNum,hasRead,deleteButton,changeReadStatusButton);

        document.getElementById('book-container').appendChild(book);
        }
}

function createBook(title, author, pageNum, hasRead) {
    addBookToLibrary(new Book(title, author, pageNum, hasRead));
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function updateLibraryDisplay() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = "";
    myLibrary.forEach(book => book.displayBook());
}

const showBtn = document.getElementById('show-dialog');
const dialog = document.getElementById('dialog');

showBtn.addEventListener("click", () => {
    dialog.showModal();
  });

const form = document.getElementById('dialogForm');
const title = form.elements['title'];
const author = form.elements['author'];
const pageNumber = form.elements['pageNumber'];
const readStatus = form.elements['readStatus'];

form.addEventListener('submit', (e) => {
    e.preventDefault(); //Prevents default reload submission of page
    createBook(title.value, author.value, pageNumber.value, readStatus.value === "true" ? true : false);
    updateLibraryDisplay();
})
createBook('Mistborn: The Final Empire', 'Brandon Sanderson', 647, true);
createBook('A Good Girl\'s Guide To Murder', 'Holly Jackson',  400, true);
createBook('Red Rising', 'Pierce Brown', 416, false);

document.addEventListener("DOMContentLoaded", () => {
    updateLibraryDisplay(); // Ensures initial books have delete functionality
});

function displayLibrary(library) {
    library.forEach(element => {
        element.displayBook();
    });
}
displayLibrary(myLibrary);