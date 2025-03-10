const myLibrary = [];

function Book (title, author, pageNum, hasRead) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.hasRead = hasRead;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "read" : "not read yet"}`;
    };
}

function createBook(title, author, pageNum, hasRead) {
    addBookToLibrary(new Book(title, author, pageNum, hasRead));
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

Book.prototype.displayBook = function () {
    const book = document.createElement('div');
    book.classList.add('book');

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
    
    book.append(author,title,pageNum,hasRead);

    const bookContainer = document.getElementById('book-container');

    bookContainer.appendChild(book);
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
    myLibrary[myLibrary.length - 1].displayBook();
})
createBook('Mistborn: The Final Empire', 'Brandon Sanderson', 647, true);
createBook('A Good Girl\'s Guide To Murder', 'Holly Jackson',  400, true);
createBook('Red Rising', 'Pierce Brown', 416, false);

function displayLibrary(library) {
    library.forEach(element => {
        element.displayBook();
    });
}
displayLibrary(myLibrary);