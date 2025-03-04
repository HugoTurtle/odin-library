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
    let book = new Book(title, author, pageNum, hasRead);
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
    pageNum.textContent = this.pageNum;

    const hasRead = document.createElement('p')
    hasRead.classList.add('read-status');
    hasRead.textContent = this.hasRead;
    
    book.append(author,title,pageNum,hasRead);

    const bookContainer = document.getElementsByClassName('book-container');

    bookContainer.appendChild(book);
}