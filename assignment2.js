
// Assignment 2: Working with Objects
// Task: Create an object bookLibrary to manage a collection of books.
// The object should have the following properties and methods:
// books: An array of book objects (each book has title, author, and yearPublished).
// addBook(book): Adds a new book to the collection.
// getBooksByAuthor(author): Returns all books by a given author.
// removeBook(title): Removes a book by title.
// Add a method getAllBooks to return a list of all book titles.

const bookLibrary = {
    books : [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            yearPublished: 1960,
        },
        {
            title: '1984',
            author: 'George Orwell',
            yearPublished: 1949,
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            yearPublished: 1925,
        },
        {
            title: 'Harry Potter and the Sorcerer\'s Stone',
            author: 'J.K. Rowling',
            yearPublished: 1997,
        },
        {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
            yearPublished: 1998,
        },
        {
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            yearPublished: 1954,
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            yearPublished: 1813,
        },
        {
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            yearPublished: 1951,
        }
    ],
    addBook(book){
        if(book.title && book.author && book.yearPublished){
            this.books.push(book);
            console.log("Book added successfully");
            console.log(book);
        }
        else{
            console.log("Provide complete data");
        }
    },
    getBooksByAuthor(author){
        const foundBook = this.books.filter((book)=>book.author === author);
        if(foundBook){
            console.log("Book Found");
            console.log(foundBook);
        }
        else{
            console.log("book not found!");
        }
    },
    removeBook(title){
        
        const bookToDel = this.books.filter((book)=>book.title === title);
        
        if(bookToDel.length!=0){
            this.books.splice(this.books.indexOf(bookToDel));
            console.log("book deleted");
        }
        else{
            console.log("book not found");
        }
        
    },
    getAllBooks(){
        console.log(this.books.map((book)=>book.title));
    },
}

bookLibrary.getAllBooks();
bookLibrary.addBook({
    title:'Naruto',
    author:'Masashi Kishimoto',
    yearPublished : 1987
})
bookLibrary.getBooksByAuthor('J.K. Rowling');
bookLibrary.removeBook('Narut3');
bookLibrary.removeBook('Naruto');

// output 

/*
$ node "d:\Code\JSTraining\Training_Code\Javascript_Concepts_Assignment\tempCodeRunnerFile.js"
[
  'To Kill a Mockingbird',
  '1984',
  'The Great Gatsby',
  "Harry Potter and the Sorcerer's Stone",
  'Harry Potter and the Chamber of Secrets',
  'The Lord of the Rings',
  'Pride and Prejudice',
  'The Catcher in the Rye'
]
Book added successfully
{ title: 'Naruto', author: 'Masashi Kishimoto', yearPublished: 1987 }
Book Found
[
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    yearPublished: 1997
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    yearPublished: 1998
  }
]
book not found
book deleted
*/