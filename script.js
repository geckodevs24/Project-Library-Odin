// Define the library array to store books
const library = [];
``
// Define the Book constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add a new book to the library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
    render(); // Re-render the book list
}

// Function to remove a book from the library
function removeBookFromLibrary(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
        render(); // Re-render the book list
    }
}

// Function to toggle the read status of a book
function toggleReadStatus(title) {
    const book = library.find(book => book.title === title);
    if (book) {
        book.read = !book.read;
        render(); // Re-render the book list
    }
}

// Function to render the book list
function render() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    library.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
            <strong>${book.title}</strong> by ${book.author}, ${book.pages} pages
            <label><input type="checkbox" ${book.read ? 'checked' : ''} onchange="toggleReadStatus('${book.title}')">Read</label>
            <button onclick="removeBookFromLibrary('${book.title}')">Remove</button>
        `;
        bookList.appendChild(div);
    });
}

// Event listener for form submission
const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read); // Add the book to the library
    addBookForm.reset(); // Reset the form
});

// Initial rendering of the book list
render();