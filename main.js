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